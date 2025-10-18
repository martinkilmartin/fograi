import { useState, useEffect } from 'react';

export type CardType =
  | 'ComicCard'
  | 'RedditCard'
  | 'TwitterCard'
  | 'FacebookCard'
  | 'PinterestCard'
  | 'InstagramCard'
  | 'TikTokCard'
  | 'LinkedInCard'
  | 'MediumCard'
  | 'YouTubeCard'
  | 'AppleNewsCard'
  | 'HackerNewsCard';

type CardTypeMeta = { text: string; icon: string };

export const CARD_TYPE_CONFIG: Array<[CardType, CardTypeMeta]> = [
  ['ComicCard', { text: 'Classic', icon: '📰' }],
  ['RedditCard', { text: 'Reddit', icon: '👽' }],
  ['TwitterCard', { text: 'Twitter', icon: '🐦' }],
  ['FacebookCard', { text: 'Facebook', icon: '📘' }],
  ['PinterestCard', { text: 'Pinterest', icon: '📌' }],
  ['InstagramCard', { text: 'Instagram', icon: '📸' }],
  ['TikTokCard', { text: 'TikTok', icon: '🎵' }],
  ['LinkedInCard', { text: 'LinkedIn', icon: '💼' }],
  ['MediumCard', { text: 'Medium', icon: '✍️' }],
  ['YouTubeCard', { text: 'YouTube', icon: '▶️' }],
  ['AppleNewsCard', { text: 'Apple News', icon: '🍎' }],
  ['HackerNewsCard', { text: 'Hacker News', icon: '💻' }],
];

export const CARD_TYPE_KEYS: CardType[] = CARD_TYPE_CONFIG.map(([key]) => key);

const CardTypes = (): JSX.Element => {
  const [selectedCards, setSelectedCards] = useState<Set<CardType>>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('selectedCardTypes');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            const filtered = parsed.filter((card): card is CardType =>
              typeof card === 'string' && CARD_TYPE_KEYS.includes(card as CardType),
            );
            if (filtered.length) {
              return new Set<CardType>(filtered);
            }
            if (parsed.length === 0) {
              return new Set<CardType>([CARD_TYPE_KEYS[0]]);
            }
          }
        } catch (_error) {
          // ignore malformed storage
        }
      }
    }
    return new Set<CardType>(CARD_TYPE_KEYS);
  });

  const toggleCard = (card: CardType) => {
    setSelectedCards((prev) => {
      const next = new Set(prev);
      if (next.has(card)) {
        if (next.size > 1) {
          next.delete(card);
        }
      } else {
        next.add(card);
      }
      return next;
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(
        'selectedCardTypes',
        JSON.stringify(Array.from(selectedCards)),
      );
      window.dispatchEvent(new CustomEvent('selectedCardTypesChange'));
    }
  }, [selectedCards]);

  return (
    <div className="space-y-2">
      {CARD_TYPE_CONFIG.map(([card, meta]) => {
        const isSelected = selectedCards.has(card);
        const isOnlySelected = isSelected && selectedCards.size === 1;
        return (
          <label key={card} className="flex items-center gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              checked={isSelected}
              onChange={() => toggleCard(card)}
              disabled={isOnlySelected}
            />
            <span className="text-lg">
              {meta.icon} <b>{meta.text}</b>
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default CardTypes;
