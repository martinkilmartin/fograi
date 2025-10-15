import { useState, useEffect } from 'react';
import { AllNewsSources } from '@constants/NEWS_SOURCES';
import { flags } from '@constants/FLAGS';
import { Countries } from 'src/types/countries';

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
    <div style={{ display: 'grid', gap: '8px', justifyContent: 'space-evenly', padding: '0' }}>
      {Array.from(AllNewsSources.entries()).map((source, i) => {
        const isLiked = likedSources.has(source[0]);
        return (
          <div key={i} style={{ gridColumn: 'span 12' }}>
            <input
              type="checkbox"
              checked={isLiked}
              onChange={() => toggleSource(source[0])}
            />
            <span
              style={{
                fontSize: '22px',
                fontFamily: '"Georgia", "Times New Roman", Times, serif',
              }}
            >
              &nbsp;
              <b>{source[1].name}</b>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Sources;
