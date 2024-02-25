import { useState, useEffect } from 'react';
import { Grid, Link, Switch, SwitchEvent, Text } from '@nextui-org/react';
import { COUNTRIES } from '@constants/COUNTRIES';
import { flags } from '@constants/FLAGS';
import { Countries } from 'src/types/countries';

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

  const sourcy = (e: SwitchEvent, ns: keyof typeof COUNTRIES) => {
    if (e.target.checked) {
      addItem(ns);
    } else {
      removeItem(ns);
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
    <Grid.Container gap={2} justify="space-evenly" style={{ padding: '0' }}>
      {Array.from(COUNTRIES).map((ns, i) => {
        const country = ns[0].substring(0, 2).toLowerCase();
        const cFlag = flags.get(country as Countries);
        const isLiked = likedCountries.has(ns[0] as keyof typeof COUNTRIES);
        return (
          <Grid xs={12} sm={6} md={6} lg={4} xl={3} key={i}>
            <Switch
              checked={isLiked}
              onChange={(e) => sourcy(e, ns[0] as keyof typeof COUNTRIES)}
              size="xl"
              color="success"
              iconOn="❤️"
              iconOff="◻️"
            />
            <Text
              size={22}
              style={{
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
            </Text>
          </Grid>
        );
      })}
    </Grid.Container>
  );
};

export default Countries;
