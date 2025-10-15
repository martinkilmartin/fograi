import { useState, useEffect } from 'react';
import Link from 'next/link';
import Heart from '@components/SVG/Heart';
import { NS_BI_MAP } from '@constants/NS_BI_MAP';
import { AllNewsSources } from '@constants/NEWS_SOURCES';

type Props = {
  title: string;
  subTitle: string;
};

const SourcesComponent = ({ title, subTitle }: Props): JSX.Element => {
  const [likedSources, setLikedSources] = useState<Set<string>>(() => {
    if (typeof window !== 'undefined') {
      const locallyLikedSources = localStorage.getItem('likedSources');
      if (locallyLikedSources && locallyLikedSources !== '[]') {
        return new Set(JSON.parse(locallyLikedSources) as string[]);
      }
    }
    return new Set<string>();
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saveLocally = () => {
        localStorage.setItem('likedSources', JSON.stringify([...likedSources]));
      };
      saveLocally();
    }
  }, [likedSources]);

  const toggleLike = (slug: string) => {
    setLikedSources(prev => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  };

  const isLiked = (slug: string) => likedSources.has(slug);

  const entries = Array.from(AllNewsSources.entries());

  const toSlug = (key: string): string => {
    const mapped = NS_BI_MAP.get(key);
    // Prefer a hyphenated, lowercase-ish slug if available
    const candidates = [key, mapped].filter(Boolean) as string[];
    const slug = candidates.find((v) => v.includes('-')) ?? candidates[0];
    return slug;
  };

  const getEstablishedYear = (src: any): number | null => {
    // Prefer canonical 'est' if available, else parse fallbacks
    if (typeof src?.est === 'number' && Number.isFinite(src.est)) return src.est;
    const candidates = [
      src?.established_year,
      src?.founded_year,
      src?.founded,
      src?.established,
      src?.year,
      src?.since,
    ];
    for (const c of candidates) {
      if (typeof c === 'number' && Number.isFinite(c)) return c;
      if (typeof c === 'string') {
        const m = c.match(/\d{4}/);
        if (m) return parseInt(m[0], 10);
      }
    }
    return null;
  };

  const deriveCountryCode = (key: string): string => {
    // Expect keys like 'CA_LDVR' -> 'CA'; handle 'OZ' -> 'AU'
    const prefix = key.slice(0, 2).toUpperCase();
    if (prefix === 'OZ') return 'AU';
    return prefix;
  };

  type SourceEntry = { key: string; slug: string; src: any; country: string; language: string; year: number | null; name: string };
  const normalized: SourceEntry[] = entries.map(([key, src]: [string, any]) => ({
    key,
    slug: toSlug(key),
    src,
    country: deriveCountryCode(key) || 'UN',
    language: (Array.isArray(src?.langs) && src.langs.length > 0 ? src.langs[0] : 'en'),
    year: getEstablishedYear(src),
    name: src?.name || key,
  }));

  // Group by country -> language, and sort by year asc, then name
  const byCountry = new Map<string, Map<string, SourceEntry[]>>();
  for (const e of normalized) {
    if (!byCountry.has(e.country)) byCountry.set(e.country, new Map());
    const langMap = byCountry.get(e.country)!;
    if (!langMap.has(e.language)) langMap.set(e.language, []);
    langMap.get(e.language)!.push(e);
  }

  const sortedCountries = Array.from(byCountry.keys()).sort((a, b) => a.localeCompare(b));

  // Formatters for human-friendly names
  const locale = typeof navigator !== 'undefined' ? navigator.language : 'en';
  const regionFormatter = (typeof Intl !== 'undefined' && (Intl as any).DisplayNames)
    ? new (Intl as any).DisplayNames([locale], { type: 'region' })
    : null;
  const languageFormatter = (typeof Intl !== 'undefined' && (Intl as any).DisplayNames)
    ? new (Intl as any).DisplayNames([locale], { type: 'language' })
    : null;

  const countryLabel = (code: string) => {
    try { return regionFormatter ? (regionFormatter as any).of(code) ?? code : code; } catch { return code; }
  };
  const languageLabel = (code: string) => {
    try { return languageFormatter ? (languageFormatter as any).of(code) ?? code : code; } catch { return code; }
  };

  const toFlagEmoji = (code: string) => {
    try {
      const cc = (code || '').toUpperCase();
      if (!/^[A-Z]{2}$/.test(cc)) return '🏳️';
      const A = 0x1F1E6;
      return String.fromCodePoint(A + cc.charCodeAt(0) - 65, A + cc.charCodeAt(1) - 65);
    } catch {
      return '🏳️';
    }
  };

  return (
    <div id="top" className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-2">
        {title}&nbsp;({AllNewsSources.size})
      </h1>
      <p className="text-lg text-center mb-8">{subTitle}</p>

      {sortedCountries.map((country) => {
        const langMap = byCountry.get(country)!;
        const sortedLangs = Array.from(langMap.keys()).sort((a, b) => a.localeCompare(b));
        const totalInCountry = Array.from(langMap.values()).reduce((acc, arr) => acc + arr.length, 0);
        return (
          <section key={country} className="mt-8">
            <div className="flex items-baseline gap-3 mb-3">
              <h2 className="text-2xl font-bold">
                <span className="mr-2" aria-hidden>{toFlagEmoji(country)}</span>
                {countryLabel(country)}
              </h2>
              <span className="badge badge-outline">{totalInCountry}</span>
            </div>

            {sortedLangs.map((lang) => {
              const list = [...langMap.get(lang)!].sort((a, b) => {
                const ay = a.year ?? Number.POSITIVE_INFINITY;
                const by = b.year ?? Number.POSITIVE_INFINITY;
                if (ay !== by) return ay - by;
                return a.name.localeCompare(b.name);
              });
              return (
                <div key={lang} className="mt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{languageLabel(lang)}</h3>
                    <span className="badge badge-sm">{list.length}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {list.map(({ key, slug, src, year, name, country }) => (
                      <div key={key} className="card bg-base-100 border-2 border-base-content shadow">
                        <div className="card-body p-4">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <Link href={`/source/${slug}`} className="card-title text-base-content no-underline">
                                {name}
                              </Link>
                              {src?.description ? (
                                <p className="text-sm text-base-content/70 mt-1 line-clamp-2">{src.description}</p>
                              ) : null}
                              <div className="mt-2 text-xs text-base-content/60">
                                {year ? <span className="mr-2">Est. {year}</span> : null}
                                <span title={countryLabel(country)}>{toFlagEmoji(country)}</span>
                              </div>
                            </div>

                            <button
                              className={`btn btn-ghost btn-circle ${isLiked(slug) ? 'text-error' : ''}`}
                              aria-label={isLiked(slug) ? 'Unlike source' : 'Like source'}
                              title={isLiked(slug) ? 'Unlike' : 'Like'}
                              onClick={() => toggleLike(slug)}
                            >
                              <Heart someBool={isLiked(slug)} />
                            </button>
                          </div>

                          <div className="card-actions justify-between items-center mt-2">
                            <Link href={`/source/${slug}`} className="btn btn-sm btn-outline">
                              View
                            </Link>
                            {src?.url ? (
                              <a
                                href={src.url}
                                target="_blank"
                                rel="noreferrer"
                                className="link link-hover text-sm"
                                title={src.url}
                              >
                                Visit site ↗
                              </a>
                            ) : <span />}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>
        );
      })}

      <a
        href="#top"
        className="btn btn-primary btn-sm fixed bottom-6 right-6 shadow-lg"
        aria-label="Back to top"
        title="Back to top"
      >
        Top
      </a>
    </div>
  );
};

export default SourcesComponent;
