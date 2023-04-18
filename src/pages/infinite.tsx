// pages/index.tsx
import React, { useEffect } from "react";
import { useHeadlines } from "../hooks/useHeadlines";
import { HeadlineList } from "../components/Headlines/HeadlineList";


const LIMIT = 10;

const IndexPage: React.FC = () => {
    const {
        data,
        error,
        isLoading,
        isFetching,
        fetchNextPage,
        hasNextPage,
    } = useHeadlines(0, LIMIT);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop !==
                document.documentElement.offsetHeight ||
                isFetching ||
                !hasNextPage
            ) {
                return;
            }
            fetchNextPage();
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isFetching, hasNextPage, fetchNextPage]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const allHeadlines = data?.pages.flatMap((page) => page);

    return (
        <div>
            <h1>Headlines</h1>
            {allHeadlines && <HeadlineList headlines={allHeadlines} />}
            {isFetching && <div>Loading more headlines...</div>}
        </div>
    );
};

export default IndexPage;
