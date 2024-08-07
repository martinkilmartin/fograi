import { APP_TITLE, TAG_LINE } from '@constants/CONTENT';
import { Page } from '@layouts/Page';
import React, { useEffect, useRef } from 'react';
import { InfiniteData, useInfiniteQuery } from 'react-query';
import { useMediaQuery } from 'react-responsive';
import { Text } from '@nextui-org/react';
import {
  getHeadlines,
  getHeadlinesWithPreferredCountries,
} from '@lib/getHeadlines';
import { HeadlineList } from '../components/Headlines';
import { Headline } from '../types';
import { GetServerSideProps } from 'next';

interface HomePageProps {
  initialData: InfiniteData<Headline[]>;
}

const HomePage: React.FC<HomePageProps> = ({ initialData }) => {
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
  let favLanguages: string | any[] | null | undefined = undefined;

  if (typeof window !== 'undefined') {
    favCountries = localStorage.getItem('likedCountries');
    favSources = localStorage.getItem('likedSources');
    favMediaTypes = localStorage.getItem('likedMediaTypes');
    favLanguages = localStorage.getItem('likedLanguages');
  }

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery<Headline[], Error>(
      'headlines',
      ({ pageParam = null }) =>
        ((favCountries && favCountries !== '[]') || (favSources && favSources !== '[]') || (favMediaTypes && favMediaTypes !== '[]') || (favLanguages && favLanguages !== '[]'))
          ? getHeadlinesWithPreferredCountries(
            pageParam,
            limit,
            favCountries && favCountries !== '[]' ? JSON.parse(favCountries as string) : null,
            favLanguages && favLanguages !== '[]' ? JSON.parse(favLanguages as string) : null,
            favSources && favSources !== '[]' ? JSON.parse(favSources as string) : null,
            favMediaTypes && favMediaTypes !== '[]' ? JSON.parse(favMediaTypes as string) : null
          )
          : getHeadlines(pageParam, limit),
      {
        getNextPageParam: (lastPage, _pages) =>
          lastPage[lastPage.length - 1]?.created_at,
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

  return (
    <Page title={APP_TITLE} heading={TAG_LINE}>
      <Text
        h1
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
        {TAG_LINE}
      </Text>
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
  const initialHeadlines = await getHeadlines(null, limit);

  return {
    props: {
      initialData: {
        pages: [initialHeadlines],
        pageParams: [null],
      },
    },
  };
};
