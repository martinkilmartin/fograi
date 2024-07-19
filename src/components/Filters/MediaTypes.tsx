import { useState, useEffect } from 'react';
import { Grid, Switch, SwitchEvent, Text } from '@nextui-org/react';

type MediaTypes = 'article' | 'video' | 'audio';

const MediaTypesObj = new Map([
  ['article', { text: 'Article', icon: '📰' }],
  ['video', { text: 'Video', icon: '📹' }],
  ['audio', { text: 'Audio', icon: '🔊' }],
]);

const MediaTypes = (): JSX.Element => {
  const [likedMediaTypes, likMediaType] = useState<Set<MediaTypes>>(
    () => {
      if (typeof window !== 'undefined') {
        const locallyLikedMediaTypes = localStorage.getItem('likedMediaTypes');
        if (locallyLikedMediaTypes && locallyLikedMediaTypes !== '[]') {
          return new Set(JSON.parse(locallyLikedMediaTypes)) as Set<MediaTypes>;
        }
      }
      return new Set<MediaTypes>();
    },
  );

  const addItem = (item: MediaTypes) => {
    likMediaType((prevSet) => new Set([...prevSet, item]));
    try {
      fetch(`/api/fast/react?id=${item as string}&action=like&reaction=false`, {
        method: 'POST',
      });
    } catch (_error) {
      // do nothing
    }
  };

  const removeItem = (item: MediaTypes) => {
    likMediaType((prevSet) => {
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

  const sourcy = (e: SwitchEvent, ns: MediaTypes) => {
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
        localStorage.setItem('likedMediaTypes', JSON.stringify([...likedMediaTypes]));
      };
      saveLocally();
    }
  }, [likedMediaTypes]);

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
      {Array.from(MediaTypesObj.entries())
        .map((ns, i) => {
          const isLiked = likedMediaTypes.has(
            ns[0] as MediaTypes,
          );
          return (
            <Grid xs={12} sm={6} md={6} lg={4} xl={3} key={i}>
              <Switch
                checked={isLiked}
                onChange={(e) =>
                  sourcy(e, ns[0] as MediaTypes)
                }
                size="xl"
                color="success"
                iconOn={ns[1].icon}
                iconOff={ns[1].icon}
              />
              <Text
                size={22}
                style={{
                  fontFamily: '"Georgia", "Times New Roman", Times, serif',
                }}
              >
                <b>&nbsp;{ns[1].text}</b>
              </Text>
            </Grid>
          );
        })}
    </Grid.Container>
  );
};

export default MediaTypes;
