import { useState, useEffect } from 'react';
import Link from 'next/link';
import { COUNTRIES } from '@constants/COUNTRIES';
import { flags } from '@constants/FLAGS';
import { Countries as CountriesType} from 'src/types/countries';

const Countries = (): JSX.Element => {
  const [likedCountries, likCountry] = useState<Set<keyof typeof COUNTRIES>>(
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

  const addItem = (item: keyof typeof COUNTRIES) => {
    likCountry((prevSet) => new Set([...prevSet, item]));
    try {
      fetch(`/api/fast/react?id=${item as string}&action=like&reaction=false`, {
        method: 'POST',
      });
    } catch (_error) {
      // do nothing
    }
  };

  const removeItem = (item: keyof typeof COUNTRIES) => {
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

  const sourcy = (country: keyof typeof COUNTRIES) => {
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
    <div style={{ display: 'grid', gap: '8px', justifyContent: 'space-evenly', padding: '0' }}>
      {Array.from(COUNTRIES).map((ns, i) => {
        const country = ns[0].substring(0, 2).toLowerCase();
        const cFlag = flags.get(country as CountriesType);
        const isLiked = likedCountries.has(ns[0] as keyof typeof COUNTRIES);
        return (
          <div key={i} style={{ gridColumn: 'span 12' }}>
            <input
              type="checkbox"
              checked={isLiked}
              onChange={() => sourcy(ns[0] as keyof typeof COUNTRIES)}
            />
            <span
              style={{
                fontSize: '22px',
                fontFamily: '"Georgia", "Times New Roman", Times, serif',
              }}
            >
              &nbsp;{cFlag}&nbsp;
              <b>
                <Link
                  href={`/country/${ns[1]?.toLowerCase().replaceAll(' ', '-')}`}
                >
                  {ns[1]}
                </Link>
              </b>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
