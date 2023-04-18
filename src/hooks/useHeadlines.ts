import { supabase } from "../services/supabase";
import { useInfiniteQuery, UseInfiniteQueryResult } from "react-query";

type Headline = {
    id: number;
    created_at: string;
    source: string;
    section: string;
    headline: string;
    link: string;
    emos: string;
    img_src?: string;
    img_alt?: string;
    author?: string;
    published?: string;
};


async function pagination(o: number, l: number): Promise<Headline[]> {
    const { data, error } = await supabase
        .rpc("pagination", { o, l });

    if (error) {
        throw new Error(error.message);
    }

    return data || [];
}

export function useHeadlines(o: number, l: number): UseInfiniteQueryResult<Headline[], Error> {
    return useInfiniteQuery(
        "headlines",
        ({ pageParam = 0 }) => pagination(pageParam, l),
        {
            getNextPageParam: (lastPage, pages) => o + pages.length * l,
        }
    );
}

