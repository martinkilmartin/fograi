import { useState, useEffect } from 'react';
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

  const toggleLang = (lang: LangTypes) => {
    if (!likedLanguages.has(lang)) {
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
    <div style={{ display: 'grid', gap: '8px', justifyContent: 'space-evenly', padding: '0' }}>
      {Array.from(LangsMap.entries()).map((lang, i) => {
        const isLiked = likedLanguages.has(lang[0] as LangTypes);
        return (
          <div key={i} style={{ gridColumn: 'span 12' }}>
            <input
              type="checkbox"
              checked={isLiked}
              onChange={() => toggleLang(lang[0] as LangTypes)}
            />
            <span
              style={{
                fontSize: '22px',
                fontFamily: '"Georgia", "Times New Roman", Times, serif',
              }}
            >
              &nbsp;{lang[1].icon}&nbsp;
              <b>{lang[1].text}</b>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default LanguageOptions;
