import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import { useInfiniteQuery } from 'react-query';
import { useMediaQuery } from 'react-responsive';
import { getHeadlines } from '@lib/getHeadlines';
import { Headline } from '../types';
import React, { useRef, useEffect } from 'react';

export default function Headlines() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const limit = isTabletOrMobile ? 5 : 10;

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery<Headline[], Error>('headlines', ({ pageParam = null }) => getHeadlines(pageParam, limit), {
        getNextPageParam: (lastPage, _pages) => lastPage[lastPage.length - 1]?.created_at,
    });

    // Calculate total number of items in all pages
    const totalItems = data?.pages.reduce((total, page) => total + page.length, 0) || 0;

    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!loadMoreRef.current || !hasNextPage || isFetchingNextPage) {
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                fetchNextPage();
            }
        });

        observer.observe(loadMoreRef.current);

        return () => {
            observer.disconnect();
        };
    }, [loadMoreRef, fetchNextPage, hasNextPage, isFetchingNextPage]);

    const Item = ({ index, style }: ListChildComponentProps) => {
        // Find the correct page and index within that page for the current item
        let pageIndex = 0;
        let itemIndex = index;
        while (data && itemIndex >= data.pages[pageIndex].length) {
            itemIndex -= data.pages[pageIndex].length;
            pageIndex += 1;
        }

        const headline = data ? data.pages[pageIndex][itemIndex] : undefined;

        return (
            <div style={style}>
                {headline ? new Date(headline.created_at) + ": " + headline.headline : "Loading..."}
            </div>
        );
    };

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (status === "error") {
        return <div>Error loading data</div>;
    }

    return (
        <>
            <List
                height={800}
                itemCount={totalItems}
                itemSize={35}
                width={1200}
            >
                {Item}
            </List>
            <div ref={loadMoreRef}>Loading...</div>
        </>
    );
}
