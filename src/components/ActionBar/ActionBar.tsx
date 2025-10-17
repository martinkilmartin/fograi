import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ADJACENTS } from '@constants/ADJACENTS';
import { flags } from '@constants/FLAGS';
import { LangsMap } from '@constants/LANGS';
import { Countries as CountryTypes } from '../../types/countries';
import { LangTypes } from 'src/types';

const AnimatedButton = ({
  action,
  secondaryActions,
  onClick,
}: {
  action: { label: ActionLabel; icon: string };
  secondaryActions: string[];
  onClick: () => void;
}) => {
  const [displayIcon, setDisplayIcon] = useState(action.icon);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    let index = 0;
    const cycleDurations = [3000, 6000, 9000]; // Cycles with increasing intervals
    let cycleIndex = 0;

    const startCycle = () => {
      if (cycleIndex >= cycleDurations.length) return; // Stop after 3 cycles

      setTimeout(() => {
        interval = setInterval(() => {
          index = (index + 1) % (secondaryActions.length + 1);
          setDisplayIcon(
            index === secondaryActions.length
              ? action.icon
              : secondaryActions[index],
          );
          if (index === secondaryActions.length) {
            clearInterval(interval!);
            cycleIndex++;
            startCycle();
          }
        }, 1500);
      }, cycleDurations[cycleIndex]);
    };

    startCycle();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [action.icon, secondaryActions]);

  return (
    <button className="btn btn-ghost" onClick={onClick} aria-label={action.label}>
      {displayIcon}
    </button>
  );
};

interface ActionBarProps {
  userCountry?: CountryTypes;
}

type ActionLabel =
  | 'Media Types'
  | 'Countries'
  | 'Languages'
  | 'Categories'
  | 'Search';

const ActionBar = ({ userCountry }: ActionBarProps) => {
  const router = useRouter();
  const actions: { label: ActionLabel; icon: string }[] = [
    { label: 'Media Types', icon: '🎥' },
    { label: 'Countries', icon: '🌍' },
    { label: 'Languages', icon: '🗣️' },
    { label: 'Categories', icon: '📚' },
    { label: 'Search', icon: '🔍' },
  ];

  const secondaryActions: Record<ActionLabel, string[]> = {
    'Media Types': ['🎬', '📺', '🎵', '🎮'],
    Countries: (userCountry &&
      ADJACENTS.get(userCountry)?.countries.map((c) => flags.get(c) ?? c)) ?? [
      '🇨🇦',
      '🇺🇸',
      '🇬🇧',
      '🇮🇳',
    ],
    Languages: (userCountry &&
      ADJACENTS.get(userCountry)?.langs.map(
        (l) => LangsMap.get(l as LangTypes)?.icon ?? (l as LangTypes),
      )) ?? ['🇬🇧', '🇫🇷', '🇪🇸', '🇩🇪'],
    Categories: ['📖', '🎨', '🏀', '💼'],
    Search: ['🔍', '📅', '🔥'],
  };

  const [selectedAction, setSelectedAction] = useState<ActionLabel | null>(
    null,
  );

  type MediaType = 'article' | 'video' | 'audio';
  const MediaTypesObj = new Map<MediaType, { text: string; icon: string }>([
    ['article', { text: 'Article', icon: '📰' }],
    ['video', { text: 'Video', icon: '📹' }],
    ['audio', { text: 'Audio', icon: '🔊' }],
  ]);

  const [likedMediaTypes, setLikedMediaTypes] = useState<Set<MediaType>>(() => {
    if (typeof window !== 'undefined') {
      const v = localStorage.getItem('likedMediaTypes');
      if (v && v !== '[]') return new Set(JSON.parse(v) as MediaType[]);
    }
    return new Set<MediaType>();
  });
  const [likedCountries, setLikedCountries] = useState<Set<CountryTypes>>(() => {
    if (typeof window !== 'undefined') {
      const v = localStorage.getItem('likedCountries');
      if (v && v !== '[]') return new Set(JSON.parse(v) as CountryTypes[]);
    }
    return new Set<CountryTypes>();
  });
  const [likedLanguages, setLikedLanguages] = useState<Set<LangTypes>>(() => {
    if (typeof window !== 'undefined') {
      const v = localStorage.getItem('likedLanguages');
      if (v && v !== '[]') return new Set(JSON.parse(v) as LangTypes[]);
    }
    return new Set<LangTypes>();
  });

  const postReact = (id: string, reaction: boolean) => {
    try {
      fetch(`/api/fast/react?id=${id}&action=like&reaction=${reaction}`, {
        method: 'POST',
      });
    } catch (_e) { /* noop */ }
  };

  const toggleMedia = (m: MediaType) => {
    setLikedMediaTypes((prev) => {
      const next = new Set(prev);
      if (next.has(m)) {
        next.delete(m);
        postReact(m, true);
      } else {
        next.add(m);
        postReact(m, false);
      }
      return next;
    });
  };

  const toggleCountry = (c: CountryTypes) => {
    setLikedCountries((prev) => {
      const next = new Set(prev);
      if (next.has(c)) {
        next.delete(c);
        postReact(c as string, true);
      } else {
        next.add(c);
        postReact(c as string, false);
      }
      return next;
    });
  };

  const toggleLang = (l: LangTypes) => {
    setLikedLanguages((prev) => {
      const next = new Set(prev);
      if (next.has(l)) {
        next.delete(l);
        postReact(l as string, true);
      } else {
        next.add(l);
        postReact(l as string, false);
      }
      return next;
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('likedMediaTypes', JSON.stringify([...likedMediaTypes]));
    }
  }, [likedMediaTypes]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('likedCountries', JSON.stringify([...likedCountries]));
    }
  }, [likedCountries]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('likedLanguages', JSON.stringify([...likedLanguages]));
    }
  }, [likedLanguages]);

  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2000);
  };

  const [searchTerm, setSearchTerm] = useState('');
  const doSearch = () => {
    const q = searchTerm.trim();
    if (!q) return;
    router.push(`/search/${encodeURIComponent(q)}`);
  };

  const handleActionClick = (actionLabel: ActionLabel | null) => {
    setSelectedAction((prev) => (prev === actionLabel ? null : actionLabel));
  };

  return (
    <>
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        width: 'min-content',
        zIndex: 1000,
      }}
    >
      {/* Top Button.Group - Secondary Actions */}
      {selectedAction && (
        <div className="flex gap-2 p-2">
          {selectedAction === 'Media Types' && (
            <>
              {Array.from(MediaTypesObj.entries()).map(([code, meta]) => {
                const active = likedMediaTypes.has(code);
                return (
                  <button
                    key={code}
                    className={`btn btn-sm ${active ? 'btn-primary translate-y-[1px]' : 'btn-ghost'} shadow-[2px_2px_0_hsl(var(--bc))]`}
                    onClick={() => toggleMedia(code)}
                    aria-pressed={active}
                    aria-label={meta.text}
                  >
                    <span className="text-lg">{meta.icon}</span>
                  </button>
                );
              })}
            </>
          )}
          {selectedAction === 'Countries' && (
            <>
              {(((userCountry && ADJACENTS.get(userCountry)?.countries) ?? ['ca','us','gb','in']) as CountryTypes[]).map((code) => {
                const active = likedCountries.has(code);
                const flag = flags.get(code) ?? code.toUpperCase();
                return (
                  <button
                    key={String(code)}
                    className={`btn btn-sm ${active ? 'btn-primary translate-y-[1px]' : 'btn-ghost'} shadow-[2px_2px_0_hsl(var(--bc))]`}
                    onClick={() => toggleCountry(code)}
                    aria-pressed={active}
                    aria-label={String(code)}
                  >
                    <span className="text-lg">{flag}</span>
                  </button>
                );
              })}
            </>
          )}
          {selectedAction === 'Languages' && (
            <>
              {(((userCountry && ADJACENTS.get(userCountry)?.langs) ?? ['en','fr','es','de']) as LangTypes[]).map((code) => {
                const active = likedLanguages.has(code);
                const icon = LangsMap.get(code as LangTypes)?.icon ?? code.toUpperCase();
                return (
                  <button
                    key={String(code)}
                    className={`btn btn-sm ${active ? 'btn-primary translate-y-[1px]' : 'btn-ghost'} shadow-[2px_2px_0_hsl(var(--bc))]`}
                    onClick={() => toggleLang(code)}
                    aria-pressed={active}
                    aria-label={String(code)}
                  >
                    <span className="text-lg">{icon}</span>
                  </button>
                );
              })}
            </>
          )}
          {selectedAction === 'Categories' && (
            <button className="btn btn-sm btn-ghost shadow-[2px_2px_0_hsl(var(--bc))]" onClick={() => showToast('Topics: coming soon')}>📚</button>
          )}
          {selectedAction === 'Search' && (
            <form
              className="flex items-center gap-2"
              onSubmit={(e) => { e.preventDefault(); doSearch(); }}
            >
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input input-sm input-bordered w-40"
                placeholder="Search…"
                aria-label="Quick search"
              />
              <button type="submit" className="btn btn-sm btn-primary shadow-[2px_2px_0_hsl(var(--bc))]">Go</button>
            </form>
          )}
        </div>
      )}

      {/* Bottom Button.Group - Main Actions */}
      <div className="flex">
        {actions.map((action, index) => (
          <AnimatedButton
            key={index}
            action={action}
            secondaryActions={secondaryActions[action.label]}
            onClick={() => handleActionClick(action.label)}
          />
        ))}
      </div>
    </div>
    {toastMsg && (
      <div className="toast toast-bottom toast-start">
        <div className="alert alert-info">
          <span>{toastMsg}</span>
        </div>
      </div>
    )}
    </>
  );
};

export default ActionBar;
