import { useState, useEffect } from 'react';
import Link from 'next/link';
import { COUNTRIES } from '@constants/COUNTRIES';
import { flags } from '@constants/FLAGS';
import { Countries as CountriesTypes } from 'src/types/countries';

type Props = {
  title: string;
  subTitle: string;
};

const CountriesComponent = ({ title, subTitle }: Props): JSX.Element => {
  const [likedCountries, setLikedCountries] = useState<Set<keyof typeof COUNTRIES>>(
    () => {
      if (typeof window !== 'undefined') {
        const locallyLikedSources = localStorage.getItem('likedCountries');
        if (locallyLikedSources && locallyLikedSources !== '[]') {
          return new Set(JSON.parse(locallyLikedSources)) as Set<
            keyof typeof COUNTRIES
          >;
        }
      }
      return new Set<keyof typeof COUNTRIES>();
    },
  );

  const toggleCountry = (countryKey: keyof typeof COUNTRIES, checked: boolean) => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {Array.from(COUNTRIES).map((ns, i) => {
          const country = ns[0].substring(0, 2).toLowerCase();
          const cFlag = flags.get(country as CountriesTypes);
          const isLiked = likedCountries.has(ns[0] as keyof typeof COUNTRIES);
          return (
            <div key={i} className="flex items-center gap-3 p-3 border rounded-lg">
              <input
                type="checkbox"
                className="checkbox checkbox-success checkbox-lg"
                checked={isLiked}
                onChange={(e) => toggleCountry(ns[0] as keyof typeof COUNTRIES, e.target.checked)}
              />
              <span className="text-2xl">{cFlag}</span>
              <Link
                href={`/country/${ns[1]
                  ?.toLowerCase()
                  .replaceAll(' ', '-')}`}
                className="font-bold text-lg hover:link-primary"
              >
                {ns[1]}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesComponent;
