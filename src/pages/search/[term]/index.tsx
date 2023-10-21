import React, { useEffect, useRef, useState } from 'react';
import { InfiniteData, useInfiniteQuery } from 'react-query';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';
import { Input, Button } from '@nextui-org/react';
import { APP_TITLE, TAG_LINE } from '@constants/CONTENT';
import { Page } from '@layouts/Page';
import { getSearchTerm } from '@lib/getHeadlines';
import { HeadlineList } from '@components/Headlines';
import { Headline } from '../../../types';
import { GetServerSideProps } from 'next';

interface HomePageProps {
  initialData: InfiniteData<Headline[]>;
}

const HomePage: React.FC<HomePageProps> = ({ initialData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const { term } = router.query;

  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 992px)' });

  const handleSearch = () => {
    // Navigate to the desired route using the input text
    router.push(`/search/${searchTerm}`);
  };

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
        getSearchTerm(null, pageParam, limit, term as string, null),
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
        <Input
          label="Search results for "
          placeholder={term as string}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={() => handleSearch()}>Search</Button>
      </h1>
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
    null,
    null,
    limit,
    term as string,
    null,
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
