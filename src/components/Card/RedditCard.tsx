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
import { loadHeadlineCollection, saveHeadlineCollection } from '@lib/collection-storage';

// A simplified Reddit-like card layout that uses the same UI items and actions as ComicCard
// - Source name + media emoji
// - Time ago + country flag
// - Headline linked to article
// - Optional thumbnail
// - Like count, heart, bookmark, share/X

type Props = {
  headline: Headline;
  country?: CountriesType;
  idx?: number;
};

const RedditCard = ({ headline }: Props): JSX.Element => {
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
    const collection = loadHeadlineCollection<Headline>(COLLECTION_KEY) ?? new Map<number, Headline>();
    const wasSaved = collection.has(headline.id);

    if (wasSaved) {
      collection.delete(headline.id);
      setSaved(false);
    } else {
      collection.set(headline.id, headline);
      setSaved(true);
    }

    saveHeadlineCollection(COLLECTION_KEY, collection);

    try {
      fetch(`/api/fast/react?id=${headline.id}&action=saved&reaction=${wasSaved}`, {
        method: 'POST',
      });
    } catch (_error) {
      // do nothing
    }
  };

  function retrieveCollection() {
    return loadHeadlineCollection<Headline>(COLLECTION_KEY);
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
    <div
      className="card bg-base-100 border border-base-300 rounded-md p-3"
      style={{ margin: '10px' }}
    >
      {/* Header: source, time, country */}
      <div className="flex items-center gap-3 text-sm text-base-content/80">
        <a
          className="font-semibold hover:underline"
          href={sourceURL}
          target="_blank"
          rel="noreferrer"
        >
          {mediaEmoji ? (
            <>
              <span aria-hidden="true">{mediaEmoji}</span>&nbsp;{sourceName ?? ''}
            </>
          ) : (
            sourceName ?? ''
          )}
        </a>
        <span>•</span>
        <time title={DATE.toLocaleString()}>{diffDisplay(DATE)}</time>
        <span>•</span>
        <span title={iso2} aria-label={`Country: ${iso2}`}>
          {countryFlag}
        </span>
      </div>

      {/* Body: Title and optional thumbnail */}
      <div className="mt-2 flex gap-3">
        <div className="flex-1 min-w-0">
          <Link
            href={articleLink}
            target="_blank"
            rel="noreferrer"
            className="no-underline"
          >
            <h3 className="text-base-content font-semibold hover:underline">
              {headline.headline} ↗
            </h3>
          </Link>
        </div>
        {headline.img_src && !leadImgErr && (
          <div className="shrink-0" style={{ width: 96, height: 72, position: 'relative' }}>
            <Image
              src={headline.img_src}
              alt={headline.img_alt ?? ''}
              width={96}
              height={72}
              className="object-cover rounded"
              onError={() => setLeadImgErr(true)}
            />
          </div>
        )}
      </div>

      {/* Footer: actions */}
      <div className="mt-2 flex items-center justify-between">
        <div className="indicator">
          <span className="indicator-item badge badge-sm">
            {likeLoading ? '...' : likeCount}
          </span>
          <button
            className={`btn btn-ghost btn-sm btn-circle ${liked ? 'text-error' : ''}`}
            onClick={toggleLike}
            aria-label="Like"
            title={liked ? 'Unlike' : 'Like'}
          >
            <Heart someBool={liked} />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            className={`btn btn-ghost btn-sm btn-circle ${saved ? 'text-warning' : ''}`}
            onClick={saveToOrRemoveFromCollection}
            aria-label="Bookmark"
            title={saved ? 'Remove bookmark' : 'Bookmark'}
          >
            <Bookmark someBool={saved} />
          </button>

          {canShare ? (
            <button
              className="btn btn-ghost btn-sm btn-circle"
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
              className="btn btn-ghost btn-sm btn-circle"
              aria-label="Share on X"
            >
              <X />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default RedditCard;
