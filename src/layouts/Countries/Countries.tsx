import { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import { COUNTRIES } from '@constants/COUNTRIES';
import { countryToContinent, getFlag, countryLabel } from '@lib/geo';
import { Countries as CountriesTypes } from 'src/types/countries';

type Props = {
  title: string;
  subTitle: string;
};

const CountriesComponent = ({ title, subTitle }: Props): JSX.Element => {
  const [likedCountries, setLikedCountries] = useState<Set<CountriesTypes>>(
    () => {
      if (typeof window !== 'undefined') {
        const locallyLikedSources = localStorage.getItem('likedCountries');
        if (locallyLikedSources && locallyLikedSources !== '[]') {
          return new Set(JSON.parse(locallyLikedSources)) as Set<CountriesTypes>;
        }
      }
      return new Set<CountriesTypes>();
    },
  );

  const toggleCountry = (countryKey: CountriesTypes, checked: boolean) => {
    if (checked) {
      setLikedCountries((prevSet) => new Set([...prevSet, countryKey]));
      try {
        fetch(`/api/fast/react?id=${countryKey as string}&action=like&reaction=false`, {
          method: 'POST',
        });
      } catch (_error) {
        // do nothing
      }
    } else {
      setLikedCountries((prevSet) => {
        const newSet = new Set(prevSet);
        newSet.delete(countryKey);
        return newSet;
      });
      try {
        fetch(`/api/fast/react?id=${countryKey as string}&action=like&reaction=true`, {
          method: 'POST',
        });
      } catch (_error) {
        // do nothing
      }
    }
  };

  // Helpers
  const toISO2 = (code: string) => (code === 'oz' ? 'AU' : code.toUpperCase());

  const grouped = useMemo(() => {
    const by: Map<string, Array<[CountriesTypes, string]>> = new Map();
    for (const [key, name] of Array.from(COUNTRIES.entries())) {
      const iso2 = toISO2(key);
      const continent = countryToContinent(iso2);
      if (continent === 'Other') continue; // exclude Other
      if (!by.has(continent)) by.set(continent, []);
      by.get(continent)!.push([key, name]);
    }
    for (const [k, arr] of by) {
      arr.sort((a, b) => a[1].localeCompare(b[1]));
      by.set(k, arr);
    }
    return Array.from(by.entries()).sort((a,b)=> a[0].localeCompare(b[0]));
  }, []);

  const selectAll = () => setLikedCountries(new Set(Array.from(COUNTRIES.keys()) as Array<CountriesTypes>));
  const clearAll = () => setLikedCountries(new Set());

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saveLocally = () => {
        localStorage.setItem(
          'likedCountries',
          JSON.stringify([...likedCountries]),
        );
      };
      saveLocally();
    }
  }, [likedCountries]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        {title}&nbsp;({COUNTRIES.size})
      </h1>
      <p className="text-lg text-center mb-8">
        {subTitle}
      </p>
      <div className="flex items-center justify-end gap-2 mb-4">
        <button className="btn btn-xs btn-outline" onClick={selectAll}>Select all</button>
        <button className="btn btn-xs" onClick={clearAll}>Clear all</button>
      </div>

      <div className="space-y-3">
        {grouped.map(([continent, items]) => (
          <div key={continent} className="collapse collapse-arrow border border-base-300 bg-base-100">
            <input type="checkbox" defaultChecked />
            <div className="collapse-title text-md font-semibold">
              {continent} <span className="badge badge-ghost ml-2">{items.length}</span>
            </div>
            <div className="collapse-content">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {items.map(([key, name]) => {
                  const iso2 = toISO2(key as string);
                  const flag = getFlag(iso2);
                  const isLiked = likedCountries.has(key);
                  return (
                    <div key={String(key)} className="flex items-center gap-3 p-3 border rounded-lg">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        checked={isLiked}
                        onChange={(e) => toggleCountry(key, e.target.checked)}
                      />
                      <span className="text-xl">{flag}</span>
                      <Link
                        href={`/country/${countryLabel(iso2).toLowerCase().replaceAll(' ', '-')}`}
                        className="font-bold hover:link-primary"
                      >
                        {countryLabel(iso2)}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesComponent;
