import { useEffect, useMemo, useState } from 'react';
import { AllNewsSources } from '@constants/NEWS_SOURCES';
import { countryToContinent, getFlag, countryLabel, normalizeCountryCodeFromKey } from '@lib/geo';

const Sources = (): JSX.Element => {
  const [likedSources, likSource] = useState<Set<string>>(
    () => {
      if (typeof window !== 'undefined') {
        const locallyLikedSources = localStorage.getItem('likedSources');
        if (locallyLikedSources && locallyLikedSources !== '[]') {
          return new Set(JSON.parse(locallyLikedSources));
        }
      }
      return new Set<string>();
    },
  );

  const deriveCountry = (key: string): string => normalizeCountryCodeFromKey(key);

  const grouped = useMemo(() => {
    const by: Map<string, Map<string, Array<[string, string]>>> = new Map();
    for (const [id, meta] of Array.from(AllNewsSources.entries())) {
      const country = deriveCountry(id);
      const continent = countryToContinent(country);
      if (!by.has(continent)) by.set(continent, new Map());
      const countries = by.get(continent)!;
      if (!countries.has(country)) countries.set(country, []);
      countries.get(country)!.push([id, meta.name]);
    }
    // sort
    for (const [, countries] of by) {
      for (const [c, arr] of countries) {
        arr.sort((a, b) => a[1].localeCompare(b[1]));
        countries.set(c, arr);
      }
    }
    return Array.from(by.entries())
      .filter(([continent]) => continent !== 'Other')
      .sort((a,b)=> a[0].localeCompare(b[0]));
  }, []);

  // Use country utilities from '@lib/geo'

  const addItem = (item: string) => {
    likSource((prevSet) => new Set([...prevSet, item]));
    try {
      fetch(`/api/fast/react?id=${item}&action=like&reaction=false`, {
        method: 'POST',
      });
    } catch (_error) {
      // do nothing
    }
  };

  const removeItem = (item: string) => {
    likSource((prevSet) => {
      const newSet = new Set(prevSet);
      newSet.delete(item);
      return newSet;
    });
    try {
      fetch(`/api/fast/react?id=${item}&action=like&reaction=true`, {
        method: 'POST',
      });
    } catch (_error) {
      // do nothing
    }
  };

  const toggleSource = (source: string) => {
    if (!likedSources.has(source)) {
      addItem(source);
    } else {
      removeItem(source);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saveLocally = () => {
        localStorage.setItem(
          'likedSources',
          JSON.stringify([...likedSources]),
        );
      };
      saveLocally();
    }
  }, [likedSources]);

  return (
    <div className="space-y-2">
      {grouped.map(([continent, countries]) => (
        <div key={continent} className="collapse collapse-arrow border border-base-300 bg-base-100">
          <input type="checkbox" defaultChecked />
          <div className="collapse-title text-md font-semibold">
            {continent}
            <span className="badge badge-ghost ml-2">
              {Array.from(countries.values()).reduce((acc, arr) => acc + arr.length, 0)}
            </span>
          </div>
          <div className="collapse-content">
            <div className="space-y-2">
              {Array.from(countries.entries()).sort((a,b)=> a[0].localeCompare(b[0])).map(([country, items]) => {
                const flag = getFlag(country);
                const label = countryLabel(country);
                return (
                <div key={country} className="collapse collapse-arrow border border-base-200">
                  <input type="checkbox" />
                  <div className="collapse-title">
                    <span className="font-medium">{flag} {label}</span>
                    <span className="badge badge-ghost ml-2">{items.length}</span>
                  </div>
                  <div className="collapse-content">
                    <div className="grid gap-2">
                      {items.map(([id, name]) => {
                        const isLiked = likedSources.has(id);
                        return (
                          <label key={id} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              className="checkbox checkbox-sm"
                              checked={isLiked}
                              onChange={() => toggleSource(id)}
                            />
                            <span className="text-lg"><b>{name}</b></span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );})}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sources;
