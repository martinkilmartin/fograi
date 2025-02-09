import { GetServerSideProps } from 'next';
import React, { useEffect, useRef } from 'react';
import { InfiniteData, useInfiniteQuery } from 'react-query';
import { useMediaQuery } from 'react-responsive';
import { APP_TITLE, TAG_LINE } from '@constants/CONTENT';
import { NEIGHBOURS } from '@constants/NEIGHBOURS';
import LoadingSpinner from '@components/Loading/LoadingSpinner';
import { Page } from '@layouts/Page';
import {
  getHeadlines,
  getHeadlinesWithPreferredCountries,
} from '@lib/getHeadlines';
import { HeadlineList } from '@components/Headlines';
import { Headline, Countries as CountriesType } from '../types';

interface HomePageProps {
  initialData: InfiniteData<Headline[]>;
  numberOfColumns: number;
  friendsAndNeighbours: Array<CountriesType> | null;
  userCountry: CountriesType;
}

const HomePage: React.FC<HomePageProps> = ({
  initialData,
  numberOfColumns,
  friendsAndNeighbours,
  userCountry,
}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 992px)' });
  const isDesktop = useMediaQuery({
    query: '(min-width: 992px) and (max-width: 1920px)',
  });
  const isHD = useMediaQuery({
    query: '(min-width: 1920px) and (max-width: 2560px)',
  });
  const is3K = useMediaQuery({
    query: '(min-width: 2560px) and (max-width: 3840px)',
  });
  const is4K = useMediaQuery({
    query: '(min-width: 3840px) and (max-width: 5120px)',
  });
  const is5K = useMediaQuery({
    query: '(min-width: 5120px) and (max-width: 7680px)',
  });
  const is8K = useMediaQuery({ query: '(min-width: 7680px)' });

  let limit = 4;

  if (isMobile) {
    limit = 4;
  } else if (isTablet) {
    limit = 8;
  } else if (isDesktop) {
    limit = 12;
  } else if (isHD) {
    limit = 16;
  } else if (is3K) {
    limit = 20;
  } else if (is4K) {
    limit = 24;
  } else if (is5K) {
    limit = 32;
  } else if (is8K) {
    limit = 48;
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
        (favCountries && favCountries !== '[]') ||
        (favSources && favSources !== '[]') ||
        (favMediaTypes && favMediaTypes !== '[]') ||
        (favLanguages && favLanguages !== '[]') ||
        friendsAndNeighbours
          ? getHeadlinesWithPreferredCountries(
              pageParam,
              limit,
              favCountries && favCountries !== '[]'
                ? JSON.parse(favCountries as string)
                : friendsAndNeighbours
                ? friendsAndNeighbours
                : null,
              favLanguages && favLanguages !== '[]'
                ? JSON.parse(favLanguages as string)
                : null,
              favSources && favSources !== '[]'
                ? JSON.parse(favSources as string)
                : null,
              favMediaTypes && favMediaTypes !== '[]'
                ? JSON.parse(favMediaTypes as string)
                : null,
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
      {status === 'loading' && <LoadingSpinner />}
      {status === 'error' && <LoadingSpinner isError={true} />}
      {status !== 'loading' && status !== 'error' && (
        <HeadlineList
          headlines={allHeadlines}
          fetching={isFetchingNextPage}
          numberOfColumns={numberOfColumns}
          userCountry={userCountry}
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

const is4KUserAgent = (userAgent: string): boolean => {
  return /4k|ultrahd|uhd/i.test(userAgent);
};

const is5KUserAgent = (userAgent: string): boolean => {
  return /5k/i.test(userAgent);
};

const is8KUserAgent = (userAgent: string): boolean => {
  return /8k/i.test(userAgent);
};

const isHDUserAgent = (userAgent: string): boolean => {
  return /hd|1920x1080|1080p/i.test(userAgent);
};

const isDesktopUserAgent = (userAgent: string): boolean => {
  return /windows|macintosh|linux/i.test(userAgent);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userAgent = context.req.headers['user-agent'] || '';
  const isMobile = isMobileUserAgent(userAgent);
  const isTablet = isTabletUserAgent(userAgent);
  const is4K = is4KUserAgent(userAgent);
  const is5K = is5KUserAgent(userAgent);
  const is8K = is8KUserAgent(userAgent);
  const isHD = isHDUserAgent(userAgent);
  const isDeskTop = isDesktopUserAgent(userAgent);

  let limit = 4;

  if (isMobile) {
    limit = 4;
  } else if (isTablet) {
    limit = 8;
  } else if (isHD) {
    limit = 16;
  } else if (is4K) {
    limit = 24;
  } else if (is5K) {
    limit = 32;
  } else if (is8K) {
    limit = 48;
  } else if (isDeskTop) {
    limit = 16;
  }

  let friendsAndNeighbours: Array<CountriesType> | null = null;
  let userCountry = context.req.headers['x-vercel-ip-country'] ?? 'CA';
  if (userCountry === 'AU') {
    userCountry = 'oz';
  }
  if (typeof userCountry === 'string') {
    userCountry = userCountry.toLowerCase();
    const countryToSearchIsEnabled = userCountry as CountriesType;
    const foundNeigbours = NEIGHBOURS.get(countryToSearchIsEnabled);
    if (foundNeigbours) {
      const nonEmptyNeighbours = foundNeigbours.filter(
        (fn) => fn !== '',
      ) as Array<CountriesType>;
      friendsAndNeighbours = [countryToSearchIsEnabled, ...nonEmptyNeighbours];
    }
  }
  const initialHeadlines = friendsAndNeighbours
    ? await getHeadlinesWithPreferredCountries(
        null,
        limit,
        friendsAndNeighbours,
      )
    : await getHeadlines(null, limit);

  return {
    props: {
      initialData: {
        pages: [initialHeadlines],
        pageParams: [null],
      },
      numberOfColumns: limit / 4,
      friendsAndNeighbours,
      userCountry,
    },
  };
};
