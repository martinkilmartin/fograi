import { useState, useEffect } from 'react';
import { Grid, Switch, SwitchEvent, Text } from '@nextui-org/react';
import { LangsMap } from '@constants/LANGS';
import { LangTypes } from 'src/types';

const LanguageOptions = (): JSX.Element => {
  const [likedLanguages, likLang] = useState<Set<LangTypes>>(
    () => {
      if (typeof window !== 'undefined') {
        const locallyLikedMediaTypes = localStorage.getItem('likedLanguages');
        if (locallyLikedMediaTypes && locallyLikedMediaTypes !== '[]') {
          return new Set(JSON.parse(locallyLikedMediaTypes)) as Set<LangTypes>;
        }
      }
      return new Set<LangTypes>();
    },
  );

  const addItem = (item: LangTypes) => {
    likLang((prevSet) => new Set([...prevSet, item]));
    try {
      fetch(`/api/fast/react?id=${item as string}&action=like&reaction=false`, {
        method: 'POST',
      });
    } catch (_error) {
      // do nothing
    }
  };

  const removeItem = (item: LangTypes) => {
    likLang((prevSet) => {
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

  const toggleLang = (e: SwitchEvent, lang: LangTypes) => {
    if (e.target.checked) {
      addItem(lang);
      trackClicks('like', lang.toString());
    } else {
      removeItem(lang);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saveLocally = () => {
        localStorage.setItem('likedLanguages', JSON.stringify([...likedLanguages]));
      };
      saveLocally();
    }
  }, [likedLanguages]);

  const trackClicks = (
    action:
      | 'like'
      | 'saved'
      | 'shared'
      | 'link'
      | 'info'
      | 'source'
      | 'country',
    lang: string,
  ) => {
    try {
      fetch(`/api/fast/react?id=${lang}&action=${action}&reaction=false`, {
        method: 'POST',
      });
    } catch (_error) {
      // do nothing
    }
  };

  return (
    <Grid.Container gap={2} justify="space-evenly" style={{ padding: '0' }}>
      {Array.from(LangsMap.entries())
        .map((lang, i) => {
          const isLiked = likedLanguages.has(
            lang[0] as LangTypes,
          );
          return (
            <Grid xs={12} sm={6} md={6} lg={4} xl={3} key={i}>
              <Switch
                checked={isLiked}
                onChange={(e) =>
                  toggleLang(e, lang[0] as LangTypes)
                }
                size="xl"
                color="success"
                iconOn={lang[1].icon}
                iconOff={lang[1].icon}
              />
              <Text
                size={22}
                style={{
                  fontFamily: '"Georgia", "Times New Roman", Times, serif',
                }}
              >
                <b>&nbsp;{lang[1].text}</b>
              </Text>
            </Grid>
          );
        })}
    </Grid.Container>
  );
};

export default LanguageOptions;
