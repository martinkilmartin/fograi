import { ref, computed } from "vue";
import { useStorage, isClient } from "@vueuse/core";
import type { Headline } from "../../types/Headline";
import type { Countries } from "../../types/Countries";

const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseURL || !supabaseKey) {
  console.error('Supabase environment variables are missing!');
}

// 🟢 In-memory session cache (prevents duplicate requests)
const cache = new Map<string, Headline[]>();

export function useHeadlines() {
  const headlines = ref<Headline[]>([]);
  const loading = ref(false);
  const storedHeadlines = useStorage<Headline[]>("cached-headlines", []); // Local storage cache

  async function fetchFromSupabase<T>(rpcFunction: string, params: Record<string, unknown>, cacheKey: string): Promise<T[]> {
    loading.value = true;

    // ✅ 1. Check in-memory cache
    if (cache.has(cacheKey)) {
      console.log(`Using in-memory cache: ${cacheKey}`);
      loading.value = false;
      return cache.get(cacheKey) as T[];
    }

    // ✅ 2. Check local storage cache
    if (storedHeadlines.value.length > 0 && cacheKey === "get_headlines") {
      console.log("Using local storage cache");
      loading.value = false;
      return storedHeadlines.value as T[];
    }

    try {
      // ✅ Use `fetch()` instead of `rpc()` to allow caching headers
      const response = await fetch(`${supabaseURL}/rest/v1/rpc/${rpcFunction}`, {
        method: "POST",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
          "Cache-Control": "max-age=60", // ⏳ Cache API response for 60s
        },
        body: JSON.stringify(params),
      });

      if (!response.ok) throw new Error(`Supabase error: ${response.statusText}`);

      const data = await response.json();

      // ✅ 3. Store in-memory cache
      cache.set(cacheKey, data || []);

      // ✅ 4. Store in local storage (only for main headlines)
      if (cacheKey === "get_headlines") storedHeadlines.value = data || [];

      return data || [];
    } catch (error) {
      console.error("Supabase fetch error:", error);
      return [];
    } finally {
      loading.value = false;
    }
  }

  async function getHeadlinesSSR(lastSeen: string | null = null, limit = 8) {
    if (typeof window !== "undefined") return; // ✅ Runs only on the server
    headlines.value = await fetchFromSupabase<Headline>("get_paginated_results_v2", { page_size: limit, last_seen: lastSeen }, "get_headlines");
  }

  async function getHeadlinesCSR(lastSeen: string | null = null, limit = 8) {
    if (!isClient) return; // ✅ Runs only in the client
    headlines.value = await fetchFromSupabase<Headline>("get_paginated_results_v2", { page_size: limit, last_seen: lastSeen }, "get_headlines");
  }

  async function getHeadlinesCountry(lastSeen: string | null = null, limit = 8, country: Countries) {
    headlines.value = await fetchFromSupabase<Headline>("get_paginated_results_v3", { page_size: limit, last_seen: lastSeen, country_filter: [country] }, `country_${country}`);
  }

  async function getHeadlinesCountrySource(lastSeen: string | null = null, limit = 8, country: Countries, sources: Array<string> | null = null) {
    headlines.value = await fetchFromSupabase<Headline>("get_paginated_results_country_sources_v2", { page_size: limit, last_seen: lastSeen, country_filter: country, source_filter: sources }, `country_${country}_sources`);
  }

  async function getSearchTerm(searchTerm: string, limit = 8, country: Array<Countries> | null = null, sources: Array<string> | null = null, mediaTypes: Array<"article" | "video" | "audio"> | null = null, lastSeen: string | null = null) {
    headlines.value = await fetchFromSupabase<Headline>("get_search_term_v3", { page_size: limit, last_seen: lastSeen, country_filter: country, source_filter: sources, media_type_filter: mediaTypes, search_term: searchTerm }, `search_${searchTerm}`);
  }

  async function getHeadlinesWithPreferredCountries(lastSeen: string | null = null, limit = 8, countries: Array<Countries> | null = null, languages: Array<string> | null = null, sources: Array<string> | null = null, mediaTypes: Array<string> | null = null) {
    headlines.value = await fetchFromSupabase<Headline>("get_paginated_results_v3", { page_size: limit, last_seen: lastSeen, country_filter: countries, lang_filter: languages, source_filter: sources, media_type_filter: mediaTypes }, "preferred_countries");
  }

  return {
    headlines: computed(() => headlines.value),
    loading: computed(() => loading.value),
    getHeadlinesSSR,
    getHeadlinesCSR,
    getHeadlinesCountry,
    getHeadlinesCountrySource,
    getSearchTerm,
    getHeadlinesWithPreferredCountries,
  };
}
