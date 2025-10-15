import { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import { COUNTRIES } from '@constants/COUNTRIES';
import { Countries as CountriesType} from 'src/types/countries';
import { countryToContinent, getFlag, countryLabel } from '@lib/geo';

const Countries = (): JSX.Element => {
  const [likedCountries, likCountry] = useState<Set<CountriesType>>(
    () => {
      if (typeof window !== 'undefined') {
        const locallyLikedSources = localStorage.getItem('likedCountries');
        if (locallyLikedSources && locallyLikedSources !== '[]') {
          return new Set(JSON.parse(locallyLikedSources)) as Set<CountriesType>;
        }
      }
      return new Set<CountriesType>();
    },
  );

  // Normalize key from COUNTRIES map to ISO2 for continent grouping
  const toISO2 = (code: string) => (code === 'oz' ? 'AU' : code.toUpperCase());

  const grouped = useMemo(() => {
    const by: Map<string, Array<[CountriesType, string]>> = new Map();
    for (const [code, name] of Array.from(COUNTRIES.entries())) {
      const continent = countryToContinent(toISO2(code));
      if (!by.has(continent)) by.set(continent, []);
      by.get(continent)!.push([code, name]);
    }
    // sort names inside continents
    for (const [k, arr] of by) {
      arr.sort((a, b) => a[1].localeCompare(b[1]));
      by.set(k, arr);
    }
    return Array.from(by.entries())
      .filter(([continent]) => continent !== 'Other')
      .sort((a,b)=> a[0].localeCompare(b[0]));
  }, []);

  const addItem = (item: CountriesType) => {
    likCountry((prevSet) => new Set([...prevSet, item]));
    try {
      fetch(`/api/fast/react?id=${item as string}&action=like&reaction=false`, {
        method: 'POST',
      });
    } catch (_error) {
      // do nothing
    }
  };

  const removeItem = (item: CountriesType) => {
    likCountry((prevSet) => {
      const newSet = new Set(prevSet);
      newSet.delete(item);
      return newSet;
    });
    try {
      fetch(`/api/fast/react?id=${item as string}&action=like&reaction=true`, {
        method: 'POST',
      });
    } catch (_error) {
      // do nothing
    }
  };

  const sourcy = (country: CountriesType) => {
    if (!likedCountries.has(country)) {
      addItem(country);
    } else {
      removeItem(country);
    }
  };

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
    <div className="space-y-2">
      {grouped.map(([continent, items]) => (
        <div key={continent} className="collapse collapse-arrow border border-base-300 bg-base-100">
          <input type="checkbox" defaultChecked />
          <div className="collapse-title text-md font-semibold">
            {continent} <span className="badge badge-ghost ml-2">{items.length}</span>
          </div>
          <div className="collapse-content">
            <div className="grid gap-2">
              {items.map(([code, name]) => {
                const iso2 = toISO2(code as string);
                const cFlag = getFlag(iso2);
                const isLiked = likedCountries.has(code as CountriesType);
                return (
                  <label key={String(code)} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      checked={isLiked}
                      onChange={() => sourcy(code as CountriesType)}
                    />
                    <span className="text-lg">
                      {cFlag} <b>{countryLabel(iso2)}</b>
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countries;
