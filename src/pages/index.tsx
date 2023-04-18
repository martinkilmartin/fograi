import { APP_TITLE, TAG_LINE } from '@constants/CONTENT'
import { Page } from '@layouts/Page'
import React, { useEffect, useRef, useCallback } from "react";
import { useHeadlines } from "../hooks/useHeadlines";
import { HeadlineList } from "../components/Headlines/HeadlineList";

const LIMIT = 6;

const HomePage: React.FC = () => {
  const {
    data,
    error,
    isLoading,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useHeadlines(0, LIMIT);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const first = entries[0];
      if (first.isIntersecting && hasNextPage && !isFetching) {
        fetchNextPage();
      }
    },
    [isFetching, hasNextPage, fetchNextPage]
  );


  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: "400px", // Adjust this value to trigger loading sooner
    });
    const currentRef = loadMoreRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [handleObserver]);


  const allHeadlines = data?.pages.flatMap((page) => page);
  return (
    <Page title={APP_TITLE} heading={TAG_LINE}>
      {allHeadlines && <HeadlineList headlines={allHeadlines} loading={isLoading} />}
      <div ref={loadMoreRef} />
      {error && <div>Error: {error.message}</div>}
    </Page>
  );
};

export default HomePage
