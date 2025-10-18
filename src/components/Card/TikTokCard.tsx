import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import diffDisplay from '@lib/time-format';
import Heart from '@components/SVG/Heart';
import Bookmark from '@components/SVG/Bookmark';
import Share from '@components/SVG/Share';
import X from '@components/SVG/X';
import { AllNewsSources } from '@constants/NEWS_SOURCES';
import { getFlag } from '@lib/geo';
import { Headline } from '../../types';
import { Countries as CountriesType } from '../../types/countries';

// TikTok-like card (UI only): tall media pane with right-side action bar
// Uses the same items and behaviors as ComicCard

type Props = {
  headline: Headline;
  country?: CountriesType;
  idx?: number;
};

const TikTokCard = ({ headline }: Props): JSX.Element => {
  const COLLECTION_KEY = 'nooze';

  const [leadImgErr, setLeadImgErr] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number | '?'>('?');
  const [likeLoading, setLikeLoading] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
  const [canShare, setShareable] = useState(true);

  const DATE = new Date(headline.created_at);
  const nooze_utm_tag = 'utm_source=nooze.news';
  const sourceURL = AllNewsSources.get(headline.source)?.url + '?' + nooze_utm_tag;
  const articleLink = headline.link.includes('?')
    ? `${headline.link}&${nooze_utm_tag}`
    : `${headline.link}?${nooze_utm_tag}`;
  const sourceName = AllNewsSources.get(headline.source)?.name;

  const mediaEmojiMap = {
    video: '🎬',
    audio: '🎧',
    article: '📰',
  } as const;
  const mediaEmoji = mediaEmojiMap[headline.media_type as keyof typeof mediaEmojiMap] ?? '📰';

  const toggleLike = async () => {
    setLikeLoading(true);
    try {
      const response = await fetch(
        `/api/fast/react?id=${headline.id}&action=like&reaction=${liked}`,
        { method: 'POST' },
      );
      if (response.ok) {
        const data = await response.json();
        setLikeCount(data.result);
      } else {
        throw Error();
      }
    } catch (_error) {
      setLikeCount('?');
    }
    toggleLocalLike();
    setLiked(!liked);
    setLikeLoading(false);
  };

  const toggleLocalLike = () => {
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
    if (likedPosts.includes(headline.id)) {
      const index = likedPosts.indexOf(headline.id);
      likedPosts.splice(index, 1);
    } else {
      likedPosts.push(headline.id);
    }
    localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
    setLiked(!liked);
  };

  useEffect(() => {
    const isSaved = () => {
      const currentCollection = retrieveCollection();
      return !!(currentCollection && currentCollection.get(headline.id));
    };
    setSaved(isSaved());
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
    setLiked(likedPosts.includes(headline.id));
  }, [headline.id]);

  const saveToOrRemoveFromCollection = async () => {
    const currentCollection = retrieveCollection();
    if (currentCollection) {
      if (saved && currentCollection.get(headline.id)) {
        currentCollection.delete(headline.id);
        const mapAsArray = Array.from(currentCollection.entries());
        localStorage.setItem(COLLECTION_KEY, JSON.stringify(mapAsArray));
        setSaved(false);
      } else {
        currentCollection.set(headline.id, headline);
        const mapAsArray = Array.from(currentCollection.entries());
        localStorage.setItem(COLLECTION_KEY, JSON.stringify(mapAsArray));
        setSaved(true);
      }
    } else {
      const newCollection = new Map<number, Headline>();
      newCollection.set(headline.id, headline);
      const mapAsArray = Array.from(newCollection.entries());
      localStorage.setItem(COLLECTION_KEY, JSON.stringify(mapAsArray));
      setSaved(true);
    }
    try {
      fetch(`/api/fast/react?id=${headline.id}&action=saved&reaction=${saved}`, {
        method: 'POST',
      });
    } catch (_error) {
      // do nothing
    }
  };

  function retrieveCollection() {
    if (typeof window !== 'undefined') {
      const mapAsArrayString = localStorage.getItem(COLLECTION_KEY);
      if (mapAsArrayString) {
        const mapAsArray = JSON.parse(mapAsArrayString);
        return new Map<number, Headline>(mapAsArray);
      }
    }
    return null;
  }

  const share = async () => {
    try {
      fetch(`/api/fast/react?id=${headline.id}&action=shared&reaction=false`, {
        method: 'POST',
      });
    } catch (_error) {
      // do nothing
    }
    try {
      await navigator.share({
        title: headline.headline,
        url: articleLink,
      });
    } catch (_e) {
        setShareable(false);
    }
  };

  const twShare =
    'https://twitter.com/intent/tweet?text=' +
    headline.headline +
    '&url=' +
    articleLink;

  const iso2 = (headline.country || '').slice(0, 2).toUpperCase();
  const countryFlag = getFlag(iso2);

  return (
    <div className="bg-base-100 border border-base-300 rounded-xl overflow-hidden" style={{ margin: '10px' }}>
      {/* Header (compact) */}
      <div className="flex items-center justify-between p-2 text-sm text-base-content/80">
        <div className="flex items-center gap-2 min-w-0">
          <div className="h-8 w-8 rounded-full bg-base-300 flex items-center justify-center text-base-content/70">
            {mediaEmoji}
          </div>
          <a
            className="font-semibold hover:underline truncate"
            href={sourceURL}
            target="_blank"
            rel="noreferrer"
            title={sourceName ?? ''}
          >
            {sourceName ?? ''}
          </a>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <time title={DATE.toLocaleString()}>{diffDisplay(DATE)}</time>
          <span>·</span>
          <span title={iso2} aria-label={`Country: ${iso2}`}>{countryFlag}</span>
        </div>
      </div>

      {/* Media area with right-side actions bar */}
      <div className="relative w-full">
        <div className="w-full bg-base-200">
          {headline.img_src && !leadImgErr ? (
            <Image
              src={headline.img_src}
              alt={headline.img_alt ?? ''}
              width={720}
              height={1280}
              className="w-full h-auto object-cover aspect-[9/16]"
              onError={() => setLeadImgErr(true)}
            />
          ) : (
            <div className="w-full aspect-[9/16] bg-base-200 flex items-center justify-center text-4xl">
              {mediaEmoji}
            </div>
          )}
        </div>

        {/* Vertical actions on the right */}
        <div className="absolute right-2 bottom-2 flex flex-col items-center gap-3">
          <div className="indicator">
            <span className="indicator-item badge badge-xs">
              {likeLoading ? '…' : likeCount}
            </span>
            <button
              className={`btn btn-sm btn-circle ${liked ? 'text-error' : ''}`}
              onClick={toggleLike}
              aria-label="Like"
              title={liked ? 'Unlike' : 'Like'}
            >
              <Heart someBool={liked} />
            </button>
          </div>
          <button
            className={`btn btn-sm btn-circle ${saved ? 'text-warning' : ''}`}
            onClick={saveToOrRemoveFromCollection}
            aria-label="Bookmark"
            title={saved ? 'Remove bookmark' : 'Bookmark'}
          >
            <Bookmark someBool={saved} />
          </button>
          {canShare ? (
            <button
              className="btn btn-sm btn-circle"
              onClick={share}
              aria-label="Share"
              title="Share"
            >
              <Share someBool={false} />
            </button>
          ) : (
            <Link
              href={twShare}
              target="_blank"
              rel="noreferrer"
              title="Browser share not supported. Defaulting to X."
              className="btn btn-sm btn-circle"
              aria-label="Share on X"
            >
              <X />
            </Link>
          )}
        </div>
      </div>

      {/* Caption (below media) */}
      <div className="p-3">
        <Link href={articleLink} target="_blank" rel="noreferrer" className="no-underline">
          <p className="text-base-content leading-snug">
            {headline.headline} ↗
          </p>
        </Link>
      </div>
    </div>
  );
};

export default TikTokCard;
