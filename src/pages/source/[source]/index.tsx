import React, { useEffect, useRef } from 'react';
import { InfiniteData, useInfiniteQuery } from 'react-query';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { HeadlineList } from '@components/Headlines';
import { APP_TITLE, TAG_LINE } from '@constants/CONTENT';
import { NS_BI_MAP } from '@constants/NS_BI_MAP';
import { Page } from '@layouts/Page';
import { getHeadlinesCountrySource } from '@lib/getHeadlines';
import { Headline } from '../../../types';
import { Countries } from '../../../types/countries';

interface HomePageProps {
  initialData: InfiniteData<Headline[]>;
}

const HomePage: React.FC<HomePageProps> = ({ initialData }) => {
  const router = useRouter();
  const { source } = router.query;
  const sourceID = NS_BI_MAP.get(source as string);
  const country = (sourceID as string)?.substring(0, 2).toLowerCase();
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 992px)' });

  const sourcesArray = `{${sourceID as string}}`;

  let limit: number;

  if (isMobile) {
    limit = 3;
  } else if (isTablet) {
    limit = 6;
  } else {
    limit = 12;
  }

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery<Headline[], Error>(
      'headlines',
      ({ pageParam = null }) =>
        getHeadlinesCountrySource(
          pageParam,
          limit,
          country as Countries,
          sourcesArray,
        ),
      {
        getNextPageParam: (lastPage, _pages) =>
          lastPage[lastPage.length - 1]?.created_at,
        enabled: router.isReady,
        initialData: initialData,
      },
    );

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !isFetchingNextPage &&
        hasNextPage &&
        loadMoreRef.current &&
        window.innerHeight + window.scrollY >=
          (loadMoreRef.current.offsetTop + loadMoreRef.current.offsetHeight) *
            0.5
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const allHeadlines = data?.pages.flatMap((page) => page);
  if (!router.isReady) return null;
  return (
    <Page title={APP_TITLE} heading={TAG_LINE}>
      <HeadlineList
        headlines={allHeadlines}
        loading={status === 'loading'}
        fetching={isFetchingNextPage}
        error={status === 'error' ? new Error() : null}
      />
      <div ref={loadMoreRef} />
    </Page>
  );
};

export default HomePage;

const isMobileUserAgent = (userAgent: string): boolean => {
  return /mobile|android|iphone|ipad/i.test(userAgent);
};

const isTabletUserAgent = (userAgent: string): boolean => {
  return /ipad|tablet|tab|kindle|playbook|silk/i.test(userAgent);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { source } = context.query;

  const sourceID = NS_BI_MAP.get(source as string);
  if (!sourceID) {
    return {
      props: {
        initialData: {
          pages: [[]],
          pageParams: [null],
        },
      },
    };
  }
  const country = (sourceID as string).substring(0, 2).toLowerCase();
  const sourcesArray = `{${sourceID}}`;
  const userAgent = context.req.headers['user-agent'] || '';
  const isMobile = isMobileUserAgent(userAgent);
  const isTablet = isTabletUserAgent(userAgent);
  let limit = 8; // default for desktop
  if (isMobile) {
    limit = 2;
  } else if (isTablet) {
    limit = 4;
  }
  const initialHeadlines = await getHeadlinesCountrySource(
    null,
    limit,
    country as Countries,
    sourcesArray,
  );

  return {
    props: {
      initialData: {
        pages: [initialHeadlines],
        pageParams: [null],
      },
    },
  };
};
