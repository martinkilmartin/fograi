import { supabase } from '@services/supabase'
import { Headline } from 'src/types'
import { Countries } from 'src/types/countries';

export async function getLast24() {
    const { data } = await supabase
        .from(`last_24_hours`)
        .select('*')
    const headlines: Array<Headline> = [...data as Array<Headline>];
    return { data: headlines };
}

export async function pagination(offset = 0, limit = 8) {
    const { data } = await supabase.rpc('pagination', { o: offset, l: limit })
    const headlines: Array<Headline> = [...data as Array<Headline>];
    return { data: headlines };
}

export async function getHeadlines(lastSeen: string | null = null, limit = 8): Promise<Headline[]> {
    try {
        const { data, error } = await supabase.rpc('get_paginated_results', {
            page_size: limit,
            last_seen: lastSeen
        });

        if (error) throw error;

        return data || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getHeadlinesCountry(lastSeen: string | null = null, limit = 8, country: Countries): Promise<Headline[]> {
    try {
        const { data, error } = await supabase.rpc('get_paginated_results_country', {
            page_size: limit,
            country: country,
            last_seen: lastSeen
        });

        if (error) throw error;

        return data || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}