import { supabase } from '@services/supabase';
import { Headline } from 'src/types';
import { Countries } from 'src/types/countries';

export async function getHeadlines(
  lastSeen: string | null = null,
  limit = 8,
): Promise<Headline[]> {
  try {
    const { data, error } = await supabase.rpc('get_paginated_results_v2', {
      page_size: limit,
      last_seen: lastSeen,
    });

    if (error) throw error;

    return data || [];
  } catch (error) {
    return [];
  }
}

export async function getHeadlinesCountry(
  lastSeen: string | null = null,
  limit = 8,
  country: Countries,
): Promise<Headline[]> {
  try {
    const { data, error } = await supabase.rpc(
      'get_paginated_results_country_sources_v2',
      {
        page_size: limit,
        country: country,
        last_seen: lastSeen,
      },
    );

    if (error) throw error;

    return data || [];
  } catch (error) {
    return [];
  }
}

export async function getHeadlinesCountrySource(
  lastSeen: string | null = null,
  limit = 8,
  country: Countries,
  sources: string,
): Promise<Headline[]> {
  try {
    const { data, error } = await supabase.rpc(
      'get_paginated_results_country_sources_v2',
      {
        page_size: limit,
        country: country,
        source_filter: sources,
        last_seen: lastSeen,
      },
    );

    if (error) throw error;

    return data || [];
  } catch (error) {
    return [];
  }
}

export async function getSearchTerm(
  limit = 8,
  country: Array<Countries> | null = null,
  sources: Array<string> | null = null,
  mediaTypes: Array<'article' | 'video' | 'audio'> | null = null,
  lastSeen: string | null = null,
  searchTerm: string,
): Promise<Headline[]> {
  try {
    const { data, error } = await supabase.rpc('get_search_term_v3', {
      page_size: limit,
      country_filter: country,
      source_filter: sources,
      media_type_filter: mediaTypes,
      last_seen: lastSeen,
      search_term: searchTerm,
    });

    if (error) throw error;

    return data || [];
  } catch (error) {
    return [];
  }
}

export async function getHeadlinesWithPreferredCountries(
  lastSeen: string | null = null,
  limit = 8,
  countries: Array<Countries> | null = null,
  sources: Array<string> | null = null,
  mediaTypes: Array<string> | null = null,
): Promise<Headline[]> {
  try {
    const { data, error } = await supabase.rpc('get_paginated_results_v3', {
      page_size: limit,
      country_filter: countries,
      lang_filter: null,
      source_filter: sources,
      media_type_filter: mediaTypes,
      last_seen: lastSeen,
    });

    if (error) throw error;

    return data || [];
  } catch (error) {
    return [];
  }
}
