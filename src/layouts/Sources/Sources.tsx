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

  // (moved) sortedCountries will be computed after display name helpers

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

  // Note: country order is computed on the fly at render-time where needed

  // Continent grouping helpers
  const countryToContinent = (code: string): string => {
    const cc = (code || '').toUpperCase();
    const AUSET = new Set(['AU', 'NZ', 'FJ', 'PG', 'AS', 'CK', 'PF']);
    const NASET = new Set(['US', 'CA', 'MX']);
    const SASET = new Set(['BR', 'AR', 'CL', 'CO', 'PE', 'UY', 'PY', 'BO', 'VE', 'EC']);
    const EUSET = new Set(['GB','UK','IE','FR','DE','ES','IT','PT','NL','BE','SE','NO','DK','FI','CH','AT','PL','CZ','HU','RO','UA','RU','GR','BG','HR','RS','SK','SI','EE','LV','LT','IS']);
    const AFSET = new Set(['ZA','NG','KE','EG','MA','DZ','TN','GH','ET','CI','TZ','TO','ZW']);
    const ASSET = new Set(['CN','JP','KR','IN','PK','BD','ID','TH','VN','PH','SG','MY','HK','TW','SA','AE','TR','IL','IR','LK']);
    const ANSET = new Set(['AQ']);
    if (AUSET.has(cc)) return 'Oceania';
    if (NASET.has(cc)) return 'North America';
    if (SASET.has(cc)) return 'South America';
    if (EUSET.has(cc)) return 'Europe';
    if (AFSET.has(cc)) return 'Africa';
    if (ASSET.has(cc)) return 'Asia';
    if (ANSET.has(cc)) return 'Antarctica';
    return 'Other';
  };

  // Sub-region refinement for 'Other'
  const countryToSubregion = (code: string): string | null => {
    const cc = (code || '').toUpperCase();
    const MIDDLE_EAST = new Set(['SA','AE','QA','KW','BH','OM','YE','JO','LB','SY','IQ','IR','IL','TR','PS']);
    const CAC = new Set(['CR','PA','GT','HN','NI','SV','BZ','CU','DO','HT','JM','TT','BB','BS','AG','DM','LC','GD','KN','VC','PR']);
    const CAUCASUS = new Set(['AM','AZ','GE']);
    const BALKANS = new Set(['AL','BA','BG','HR','GR','MK','ME','RO','RS','SI','XK']);
    const BALTIC = new Set(['EE','LV','LT']);
    if (MIDDLE_EAST.has(cc)) return 'Middle East';
    if (CAC.has(cc)) return 'Central America & Caribbean';
    if (CAUCASUS.has(cc)) return 'Caucasus';
    if (BALKANS.has(cc)) return 'Balkans';
    if (BALTIC.has(cc)) return 'Baltic';
    return null;
  };

  type ContinentMap = Map<string, Map<string, Map<string, SourceEntry[]>>>;
  const byContinent: ContinentMap = new Map();
  for (const e of normalized) {
    const continentBase = countryToContinent(e.country);
    const sub = countryToSubregion(e.country);
    const continent = sub ?? (continentBase === 'Other' ? 'Other (Misc)' : continentBase);
    if (!byContinent.has(continent)) byContinent.set(continent, new Map());
    const cMap = byContinent.get(continent)!;
    if (!cMap.has(e.country)) cMap.set(e.country, new Map());
    const lMap = cMap.get(e.country)!;
    if (!lMap.has(e.language)) lMap.set(e.language, []);
    lMap.get(e.language)!.push(e);
  }

  const sortedContinents = Array.from(byContinent.keys()).sort((a,b)=> a.localeCompare(b));

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

      {sortedContinents.map((continent) => {
        const countryMap = byContinent.get(continent)!;
        const sortedCountryCodes = Array.from(countryMap.keys()).sort((a,b)=> countryLabel(a).localeCompare(countryLabel(b)));
        const totalInContinent = Array.from(countryMap.values()).reduce((acc, langMap) => acc + Array.from(langMap.values()).reduce((s, arr) => s + arr.length, 0), 0);
        return (
          <div key={continent} className="mt-4">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                {continent} <span className="badge badge-outline ml-2">{totalInContinent}</span>
              </div>
              <div className="collapse-content">
                {sortedCountryCodes.map((country) => {
                  const langMap = countryMap.get(country)!;
                  const sortedLangs = Array.from(langMap.keys()).sort((a,b)=> languageLabel(a).localeCompare(languageLabel(b)));
                  const totalInCountry = Array.from(langMap.values()).reduce((acc, arr) => acc + arr.length, 0);
                  return (
                    <div key={country} className="mt-3">
                      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-semibold">
                          <span className="mr-2" aria-hidden>{toFlagEmoji(country)}</span>
                          {countryLabel(country)} <span className="badge badge-sm ml-2">{totalInCountry}</span>
                        </div>
                        <div className="collapse-content">
                          {sortedLangs.map((lang) => {
                            const list = [...langMap.get(lang)!].sort((a, b) => {
                              const ay = a.year ?? Number.POSITIVE_INFINITY;
                              const by = b.year ?? Number.POSITIVE_INFINITY;
                              if (ay !== by) return ay - by;
                              return a.name.localeCompare(b.name);
                            });
                            return (
                              <div key={lang} className="mt-2">
                                <div className="collapse collapse-arrow bg-base-200">
                                  <input type="checkbox" />
                                  <div className="collapse-title font-medium">
                                    {languageLabel(lang)} <span className="badge badge-xs ml-2">{list.length}</span>
                                  </div>
                                  <div className="collapse-content">
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
                                              <Link href={`/source/${slug}`} className="btn btn-sm btn-outline">View</Link>
                                              {src?.url ? (
                                                <a href={src.url} target="_blank" rel="noreferrer" className="link link-hover text-sm" title={src.url}>Visit site ↗</a>
                                              ) : <span />}
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
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
