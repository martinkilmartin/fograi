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

// Pinterest-like tile: image-first card with compact caption and actions
// Uses the same UI items and actions as ComicCard

type Props = {
  headline: Headline;
  country?: CountriesType;
  idx?: number;
};

const PinterestCard = ({ headline }: Props): JSX.Element => {
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
    <div className="rounded-xl overflow-hidden border border-base-300 bg-base-100" style={{ margin: '10px' }}>
      {/* Image-focused tile */}
      <div className="relative">
        {headline.img_src && !leadImgErr && (
          <Image
            src={headline.img_src}
            alt={headline.img_alt ?? ''}
            width={600}
            height={900}
            className="w-full h-auto object-cover"
            onError={() => setLeadImgErr(true)}
          />
        )}
        {/* Overlay actions top-right */}
        <div className="absolute top-2 right-2 flex gap-2">
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
        </div>
      </div>

      {/* Caption */}
      <div className="p-3 pt-12">
        <Link href={articleLink} target="_blank" rel="noreferrer" className="no-underline">
          <h3 className="text-base-content font-semibold leading-snug">
            {headline.headline} ↗
          </h3>
        </Link>
        <div className="mt-2 flex items-center gap-2 text-xs text-base-content/70">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-base-300 text-[11px]">
            {mediaEmoji}
          </span>
          <a className="hover:underline" href={sourceURL} target="_blank" rel="noreferrer" title={sourceName ?? ''}>
            {sourceName ?? ''}
          </a>
          <span>•</span>
          <time title={DATE.toLocaleString()}>{diffDisplay(DATE)}</time>
          <span>•</span>
          <span title={iso2} aria-label={`Country: ${iso2}`}>{countryFlag}</span>
          <span className="ml-auto">
            {canShare ? (
              <button
                className="btn btn-ghost btn-xs"
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
                className="btn btn-ghost btn-xs"
                aria-label="Share on X"
              >
                <X />
              </Link>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PinterestCard;
