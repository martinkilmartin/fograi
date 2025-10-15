import { useState, useEffect } from 'react';

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

  const toggleMediaType = (mediaType: MediaTypes) => {
    if (!likedMediaTypes.has(mediaType)) {
      addItem(mediaType);
    } else {
      removeItem(mediaType);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saveLocally = () => {
        localStorage.setItem(
          'likedMediaTypes',
          JSON.stringify([...likedMediaTypes]),
        );
      };
      saveLocally();
    }
  }, [likedMediaTypes]);

  return (
    <div className="space-y-2">
      {Array.from(MediaTypesObj.entries()).map((mediaType, i) => {
        const isLiked = likedMediaTypes.has(mediaType[0] as MediaTypes);
        return (
          <label key={i} className="flex items-center gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              checked={isLiked}
              onChange={() => toggleMediaType(mediaType[0] as MediaTypes)}
            />
            <span className="text-lg">
              {mediaType[1].icon} <b>{mediaType[1].text}</b>
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default MediaTypes;
