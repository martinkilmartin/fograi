import { supabase } from '@services/supabase';
import { Headline } from '../types';
import { Countries } from '../types/countries';

export async function getHeadlines(
  lastSeen: string | null = null,
  limit = 8,
): Promise<Headline[]> {
  try {
    const { data, error } = await supabase.rpc('get_paginated_results', {
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
      'get_paginated_results_country_sources',
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
      'get_paginated_results_country_sources',
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
