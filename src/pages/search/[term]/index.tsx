import React, { useEffect, useRef } from 'react';
import { InfiniteData, useInfiniteQuery } from 'react-query';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';
import { APP_TITLE, TAG_LINE } from '@constants/CONTENT';
import { Page } from '@layouts/Page';
import { getSearchTerm } from '@lib/getHeadlines';
import { HeadlineList } from '@components/Headlines';
import LoadingSpinner from '@components/Loading/LoadingSpinner';
import { Headline } from '../../../types';
import { GetServerSideProps } from 'next';

interface HomePageProps {
  initialData: InfiniteData<Headline[]>;
}

const HomePage: React.FC<HomePageProps> = ({ initialData }) => {
  const router = useRouter();
  const { term } = router.query;

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

  let favCountries: string | any[] | null | undefined = undefined;
  let favSources: string | any[] | null | undefined = undefined;
  let favMediaTypes: string | any[] | null | undefined = undefined;

  if (typeof window !== 'undefined') {
    favCountries = localStorage.getItem('likedCountries');
    favSources = localStorage.getItem('likedSources');
    favMediaTypes = localStorage.getItem('likedMediaTypes');
  }

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    refetch,
  } = useInfiniteQuery<Headline[], Error>(
    ['headlines', term],
    ({ pageParam = null }) =>
      getSearchTerm(
        limit,
        favCountries && favCountries !== '[]'
          ? JSON.parse(favCountries as string)
          : null,
        favSources && favSources !== '[]'
          ? JSON.parse(favSources as string)
          : null,
        favMediaTypes && favMediaTypes !== '[]'
          ? JSON.parse(favMediaTypes as string)
          : null,
        pageParam,
        term as string,
      ),
    {
      getNextPageParam: (lastPage, _pages) =>
        lastPage[lastPage.length - 1]?.created_at,
      enabled: !!term && router.isReady,
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

  useEffect(() => {
    if (term) {
      refetch();
    }
  }, [refetch, term]);

  const allHeadlines = data?.pages.flatMap((page) => page);
  if (!router.isReady) return null;
  return (
    <Page title={APP_TITLE} heading={TAG_LINE}>
      {allHeadlines?.length ? (
        <>
          {status === 'loading' && <LoadingSpinner />}
          {status === 'error' && <LoadingSpinner isError={true} />}
          {status !== 'loading' && status !== 'error' && (
            <HeadlineList
              headlines={allHeadlines}
              fetching={isFetchingNextPage}
            />
          )}
          <div ref={loadMoreRef} />
        </>
      ) : (
        <h1
          style={{
            textAlign: 'center',
            fontFamily: '"Georgia", "Times New Roman", Times, serif',
          }}
        >
          Sorry! Nothing found for <i>{term}</i>. Try something else.
        </h1>
      )}
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
  const userAgent = context.req.headers['user-agent'] || '';
  const isMobile = isMobileUserAgent(userAgent);
  const isTablet = isTabletUserAgent(userAgent);
  let limit = 8; // default for desktop
  if (isMobile) {
    limit = 2;
  } else if (isTablet) {
    limit = 4;
  }
  const term = context.query.term;

  const initialHeadlines = await getSearchTerm(
    limit,
    null,
    null,
    null,
    null,
    term as string,
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
