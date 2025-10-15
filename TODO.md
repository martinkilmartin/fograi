# Top Tasks Reminder

* supabase functions
  * stats api

* supabase auth
  * user accounts
  * user bookmarks

* share feature

* max out urls; one per:
  * country
    * region
  * news source
  * category
  * language


## Remote images (non-owned domains)

- refine next image config in `next.config.js`
  - replace wildcard `remotePatterns` with explicit allowlist of source domains (reduce risk & optimize caching keys)
  - keep `images.unoptimized = true` to avoid optimizer SSL issues and extra compute
- audit `<Image>` usage
  - ensure `width`, `height`, and `sizes` are set where possible for better layout stability and smaller payloads
  - use `loading="lazy"` (default) and only set `priority` for above-the-fold hero images
- add robust fallbacks
  - in `src/components/Card/ComicCard.tsx`, ensure placeholder/fallback renders when `onError` fires and maintain consistent aspect ratio
  - add a neutral placeholder asset (local) and use when remote image fails
- optional: evaluate external CDN/loader
  - assess Imgix/Cloudinary or a simple proxy loader route for strict domain control, caching headers, and transformations

## Caching & cost reduction (Vercel + app)

- edge cache headers for API routes
  - add `Cache-Control: public, s-maxage=300, stale-while-revalidate=86400` to read-only endpoints under `pages/api/`
  - prefer GET with stable query params to maximize cache hits
- incremental static regeneration (ISR)
  - convert hot pages (home, popular countries/sources) to `getStaticProps` with `revalidate: 300–900`
  - implement on-demand revalidation webhook from the collector to refresh on new data arrival
- key/value cache (Upstash Redis) in front of Supabase
  - wrap `getHeadlines*` and `getSearchTerm` in `src/lib/getHeadlines.ts` with KV get/set
  - normalized keys (include filters, cursors); TTL 60–300s depending on endpoint
- PWA runtime caching (next-pwa)
  - cache remote images with CacheFirst strategy (cap max entries/age)
  - cache read-only API GET responses with StaleWhileRevalidate
- react-query tuning (client cache)
  - set sensible `staleTime` (60–300s) and `cacheTime` (15m) for headline lists; disable refetch on window focus

## Supabase optimization

- stored procedures & indexes
  - ensure RPCs used in `src/lib/getHeadlines.ts` have supporting indexes for filters (country, source, media_type, last_seen)
- reduce payload size
  - return only fields required by UI from RPCs (avoid `SELECT *` internally)
- precompute hot datasets
  - from the collector, publish denormalized JSON blobs per country/source to Supabase Storage or KV; serve via CDN with long cache

## Developer experience & lint cleanups

- navbar next best practices
  - replace internal `<a>` with `next/link` and `<img>` with `next/image` in `src/components/MyNavbar/MyNavbar.tsx`
- search UX progress indicator
  - finalize loading UX in `src/pages/search/index.tsx` (button spinner, optional inline dots, input disabled) and styling consistent with DaisyUI

## Monitoring & cost visibility

- add lightweight logging/metrics for cache hit/miss rates (KV and edge cache) and Supabase query counts
- periodically review Vercel analytics and Supabase usage to tune TTLs/revalidate windows
