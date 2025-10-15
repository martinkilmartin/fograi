import { useMemo, useState, useEffect } from 'react';
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

  // Family grouping
  const getFamily = (code: string): string => {
    const c = (code || '').toLowerCase();
    const germanic = new Set(['en','de','nl','sv','no','da','is']);
    const romance = new Set(['fr','es','pt','it','ro','ca']);
    const slavic = new Set(['ru','uk','pl','cs','sk','bg','sr','hr','sl','mk']);
    const uralic = new Set(['fi','hu','et']);
    const hellenic = new Set(['el']);
    const indoAryan = new Set(['hi','bn','ur','mr','pa','gu','ne','si']);
    const dravidian = new Set(['ta','te','kn','ml']);
    const semitic = new Set(['ar','he','am']);
    const turkic = new Set(['tr','az','kk','uz','tk']);
    const eastAsian = new Set(['zh','ja','ko']);
    const seAsian = new Set(['id','ms','tl','vi','th','km','lo','my']);
    const celtic = new Set(['ga','gd','cy','br','kw','gv']);
    const bantu = new Set(['sw','zu','xh','st','tn','ny']);
    if (germanic.has(c)) return 'Germanic';
    if (romance.has(c)) return 'Romance';
    if (slavic.has(c)) return 'Slavic';
    if (uralic.has(c)) return 'Uralic';
    if (hellenic.has(c)) return 'Hellenic';
    if (indoAryan.has(c)) return 'Indo‑Aryan';
    if (dravidian.has(c)) return 'Dravidian';
    if (semitic.has(c)) return 'Semitic';
    if (turkic.has(c)) return 'Turkic';
    if (eastAsian.has(c)) return 'East Asian';
    if (seAsian.has(c)) return 'Southeast Asian';
    if (celtic.has(c)) return 'Celtic';
    if (bantu.has(c)) return 'Bantu';
    return 'Additional families';
  };

  const grouped = useMemo(() => {
    const by: Map<string, Array<[LangTypes, { text: string; icon: string }]>> = new Map();
    for (const [code, meta] of Array.from(LangsMap.entries())) {
      const fam = getFamily(code as string);
      if (!by.has(fam)) by.set(fam, []);
      by.get(fam)!.push([code as LangTypes, meta]);
    }
    for (const [fam, arr] of by) {
      arr.sort((a, b) => a[1].text.localeCompare(b[1].text));
      by.set(fam, arr);
    }
    return Array.from(by.entries()).sort((a,b)=> a[0].localeCompare(b[0]));
  }, []);

  return (
    <div className="space-y-2">
      {grouped.map(([family, items]) => (
        <div key={family} className="collapse collapse-arrow border border-base-300 bg-base-100">
          <input type="checkbox" defaultChecked />
          <div className="collapse-title text-md font-semibold">
            {family} <span className="badge badge-ghost ml-2">{items.length}</span>
          </div>
          <div className="collapse-content">
            <div className="space-y-2">
              {items.map(([code, meta]) => {
                const isLiked = likedLanguages.has(code as LangTypes);
                return (
                  <label key={code} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      checked={isLiked}
                      onChange={() => toggleLang(code as LangTypes)}
                    />
                    <span className="text-lg">
                      {meta.icon} <b>{meta.text}</b>
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LanguageOptions;
