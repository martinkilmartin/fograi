import React, { useEffect, useRef } from 'react';
import { InfiniteData, useInfiniteQuery } from 'react-query';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';
import { APP_TITLE, TAG_LINE } from '@constants/CONTENT';
import { Page } from '@layouts/Page';
import { getHeadlinesCountry } from '@lib/getHeadlines';
import { HeadlineList } from '@components/Headlines';
import { Headline } from '../../types';
import { Countries } from 'src/types/countries';
import { GetServerSideProps } from 'next';

interface HomePageProps {
  initialData: InfiniteData<Headline[]>;
}

const HomePage: React.FC<HomePageProps> = ({ initialData }) => {
  const router = useRouter();
  const { country } = router.query;
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
        getHeadlinesCountry(pageParam, limit, country as Countries),
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const country = context.query.country as Countries;
  const initialHeadlines = await getHeadlinesCountry(null, 12, country);

  return {
    props: {
      initialData: {
        pages: [initialHeadlines],
        pageParams: [null],
      },
    },
  };
};
