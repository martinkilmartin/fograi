import React, { useEffect, useRef } from 'react';
import { InfiniteData, useInfiniteQuery } from 'react-query';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';
import { APP_TITLE, TAG_LINE } from '@constants/CONTENT';
import { COUNTRIES_BI_MAP } from '@constants/COUNTRIES_BI_MAP';
import { Page } from '@layouts/Page';
import { getHeadlinesCountry } from '@lib/getHeadlines';
import { HeadlineList } from '@components/Headlines';
import LoadingSpinner from '@components/Loading/LoadingSpinner';
import { Headline } from '../../../types';
import { Countries, CountryKeys } from 'src/types/countries';
import { GetServerSideProps } from 'next';

interface HomePageProps {
  initialData: InfiniteData<Headline[]>;
}

const HomePage: React.FC<HomePageProps> = ({ initialData }) => {
  const router = useRouter();
  const { country } = router.query;
  const countryCode = COUNTRIES_BI_MAP.get(country as CountryKeys);
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 992px)' });

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
        getHeadlinesCountry(pageParam, limit, countryCode as Countries),
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
          textAlign: 'center',
          fontFamily: '"Georgia", "Times New Roman", Times, serif',
        }}
      >
        {capitalizeFirstLetterOfEachWord((country as string).replace('-', ' '))}
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

function capitalizeFirstLetterOfEachWord(str: string) {
  return str.replace(/\b[a-z]/g, function (letter) {
    return letter.toUpperCase();
  });
}

export default HomePage;

const isMobileUserAgent = (userAgent: string): boolean => {
  return /mobile|android|iphone|ipad/i.test(userAgent);
};

const isTabletUserAgent = (userAgent: string): boolean => {
  return /ipad|tablet|tab|kindle|playbook|silk/i.test(userAgent);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userAgent = context.req.headers['user-agent'] || '';
  const isMobile = isMobileUserAgent(userAgent);
  const isTablet = isTabletUserAgent(userAgent);
  let limit = 8; // default for desktop
  if (isMobile) {
    limit = 2;
  } else if (isTablet) {
    limit = 4;
  }
  const country = context.query.country as CountryKeys;
  const countryCode = COUNTRIES_BI_MAP.get(country);
  const initialHeadlines = await getHeadlinesCountry(
    null,
    limit,
    countryCode as Countries,
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
