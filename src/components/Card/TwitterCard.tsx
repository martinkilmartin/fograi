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

// Twitter-like compact card using the same data and actions as ComicCard
// Layout: header (source + time + flag), body (headline + optional image), footer (actions)

type Props = {
  headline: Headline;
  country?: CountriesType;
  idx?: number;
};

const TwitterCard = ({ headline }: Props): JSX.Element => {
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
  const mediaEmoji = mediaEmojiMap[headline.media_type as keyof typeof mediaEmojiMap] ?? '';

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
    <div className="border border-base-300 rounded-xl p-3 bg-base-100" style={{ margin: '10px' }}>
      {/* Header */}
      <div className="flex items-center gap-2 text-sm text-base-content/80">
        <div className="h-8 w-8 rounded-full bg-base-300 flex items-center justify-center text-base-content/70">
          {mediaEmoji || '📰'}
        </div>
        <div className="flex flex-wrap items-center gap-2 min-w-0">
          <a
            className="font-semibold hover:underline truncate"
            href={sourceURL}
            target="_blank"
            rel="noreferrer"
            title={sourceName ?? ''}
          >
            {sourceName ?? ''}
          </a>
          <span>·</span>
          <time title={DATE.toLocaleString()}>{diffDisplay(DATE)}</time>
          <span>·</span>
          <span title={iso2} aria-label={`Country: ${iso2}`}>
            {countryFlag}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="mt-3">
        <Link href={articleLink} target="_blank" rel="noreferrer" className="no-underline">
          <p className="text-base-content leading-snug whitespace-pre-wrap">
            {headline.headline} ↗
          </p>
        </Link>

        {headline.img_src && !leadImgErr && (
          <div className="mt-3 overflow-hidden rounded-xl border border-base-300" style={{ position: 'relative' }}>
            <Image
              src={headline.img_src}
              alt={headline.img_alt ?? ''}
              width={800}
              height={420}
              className="w-full h-auto object-cover"
              onError={() => setLeadImgErr(true)}
            />
          </div>
        )}
      </div>

      {/* Footer actions */}
      <div className="mt-3 flex items-center justify-between text-base-content/80">
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

export default TwitterCard;
