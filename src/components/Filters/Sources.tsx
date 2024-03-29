import { useState, useEffect } from 'react';
import { Grid, Switch, SwitchEvent, Text } from '@nextui-org/react';
import { AllNewsSources } from '@constants/NEWS_SOURCES';
import { flags } from '@constants/FLAGS';
import { Countries } from 'src/types/countries';

const Sources = (): JSX.Element => {
  const [likedSources, likSource] = useState<Set<keyof typeof AllNewsSources>>(
    () => {
      if (typeof window !== 'undefined') {
        const locallyLikedSources = localStorage.getItem('likedSources');
        if (locallyLikedSources && locallyLikedSources !== '[]') {
          return new Set(JSON.parse(locallyLikedSources)) as Set<
            keyof typeof AllNewsSources
          >;
        }
      }
      return new Set<keyof typeof AllNewsSources>();
    },
  );

  const addItem = (item: keyof typeof AllNewsSources) => {
    likSource((prevSet) => new Set([...prevSet, item]));
    try {
      fetch(`/api/fast/react?id=${item as string}&action=like&reaction=false`, {
        method: 'POST',
      });
    } catch (_error) {
      // do nothing
    }
  };

  const removeItem = (item: keyof typeof AllNewsSources) => {
    likSource((prevSet) => {
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

  const sourcy = (e: SwitchEvent, ns: keyof typeof AllNewsSources) => {
    if (e.target.checked) {
      addItem(ns);
      trackClicks('like', ns.toString());
    } else {
      removeItem(ns);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saveLocally = () => {
        localStorage.setItem('likedSources', JSON.stringify([...likedSources]));
      };
      saveLocally();
    }
  }, [likedSources]);

  const trackClicks = (
    action:
      | 'like'
      | 'saved'
      | 'shared'
      | 'link'
      | 'info'
      | 'source'
      | 'country',
    ns: string,
  ) => {
    try {
      fetch(`/api/fast/react?id=${ns}&action=${action}&reaction=false`, {
        method: 'POST',
      });
    } catch (_error) {
      // do nothing
    }
  };

  return (
    <Grid.Container gap={2} justify="space-evenly" style={{ padding: '0' }}>
      {Array.from(AllNewsSources)
        .sort((a, b) => a[1].est - b[1].est)
        .map((ns, i) => {
          const country = ns[0].substring(0, 2).toLowerCase();
          const cFlag = flags.get(country as Countries);
          const sourceName = AllNewsSources.get(ns[0])?.name;
          const sourceEst = AllNewsSources.get(ns[0])?.est;
          const isLiked = likedSources.has(
            ns[0] as keyof typeof AllNewsSources,
          );
          return (
            <Grid xs={12} sm={6} md={6} lg={4} xl={3} key={i}>
              <Switch
                checked={isLiked}
                onChange={(e) =>
                  sourcy(e, ns[0] as keyof typeof AllNewsSources)
                }
                size="xl"
                color="success"
                iconOn={cFlag}
                iconOff={cFlag}
              />
              <Text
                size={22}
                style={{
                  fontFamily: '"Georgia", "Times New Roman", Times, serif',
                }}
              >
                <b>&nbsp;{sourceName}</b>
                &nbsp;
                <i>{sourceEst}</i>
              </Text>
            </Grid>
          );
        })}
    </Grid.Container>
  );
};

export default Sources;
