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
  country: Array<Countries> | null = null,
  lastSeen: string | null = null,
  limit = 8,
  searchTerm: string,
  sources: Array<string> | null = null,
): Promise<Headline[]> {
  try {
    const { data, error } = await supabase.rpc('get_search_term_v2', {
      page_size: limit,
      country_filter: country,
      source_filter: sources,
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
  countries: Array<Countries>,
): Promise<Headline[]> {
  try {
    const { data, error } = await supabase.rpc(
      'get_preferred_paged_headlines_v2',
      {
        page_size: limit,
        countries: countries,
        source_filter: null,
        last_seen: lastSeen,
      },
    );

    if (error) throw error;

    return data || [];
  } catch (error) {
    return [];
  }
}
