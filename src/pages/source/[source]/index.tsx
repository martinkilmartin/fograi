import React, { useEffect, useRef } from 'react';
import { InfiniteData, useInfiniteQuery } from 'react-query';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { HeadlineList } from '@components/Headlines';
import LoadingSpinner from '@components/Loading/LoadingSpinner';
import { APP_TITLE, TAG_LINE } from '@constants/CONTENT';
import { NS_BI_MAP } from '@constants/NS_BI_MAP';
import { AllNewsSources } from '@constants/NEWS_SOURCES';
import { Page } from '@layouts/Page';
import { getHeadlinesWithPreferredCountries } from '@lib/getHeadlines';
import { Headline } from '../../../types';
import { Countries } from '../../../types/countries';

interface HomePageProps {
  initialData: InfiniteData<Headline[]>;
  sourceName: string;
}

const HomePage: React.FC<HomePageProps> = ({ initialData, sourceName }) => {
  const router = useRouter();
  const { source } = router.query;
  const sourceID = NS_BI_MAP.get(source as string);
  const country = (sourceID as string)?.substring(0, 2).toLowerCase();
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 992px)' });

  const sourcesArray = sourceID;

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
        getHeadlinesWithPreferredCountries(
          pageParam,
          limit,
          [country as Countries],
          null,
          [sourcesArray as string],
          null,
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
      <h1
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0,0,0,0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        {sourceName}
      </h1>
      {status === 'loading' && <LoadingSpinner />}
      {status === 'error' && <LoadingSpinner isError={true} />}
      {status !== 'loading' && status !== 'error' && (
        <HeadlineList
          headlines={allHeadlines}
          fetching={isFetchingNextPage}
        />
      )}
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
        sourceName: '',
      },
    };
  }
  const country = (sourceID as string).substring(0, 2).toLowerCase();
  const sourcesArray = sourceID;
  const userAgent = context.req.headers['user-agent'] || '';
  const isMobile = isMobileUserAgent(userAgent);
  const isTablet = isTabletUserAgent(userAgent);
  let limit = 8; // default for desktop
  if (isMobile) {
    limit = 2;
  } else if (isTablet) {
    limit = 4;
  }
  const initialHeadlines = await getHeadlinesWithPreferredCountries(
    null,
    limit,
    [country as Countries],
    null,
    [sourcesArray],
    null,
  );
  const sourceName = AllNewsSources.get(sourceID)?.name;

  return {
    props: {
      initialData: {
        pages: [initialHeadlines],
        pageParams: [null],
      },
      sourceName,
    },
  };
};
