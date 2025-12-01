import { useState, useEffect } from 'react';
import Image from "next/image";
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
import getMediaBadgeClass from '@lib/mediaBadge';

type Props = {
  header?: boolean;
  bgImage?: boolean;
  country?: CountriesType;
  headline: Headline;
  idx?: number;
};

const ComicCard = ({ headline }: Props): JSX.Element => {
  const COLLECTION_KEY = 'nooze';

  const [leadImgErr, setLeadImgErr] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number | '?'>('?');
  const [likeLoading, setLikeLoading] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
  const [canShare, setShareable] = useState(true);
  const DATE = new Date(headline.created_at);
  // const emojie = headline.emos;
  const nooze_utm_tag = 'utm_source=nooze.news';
  const sourceURL =
    AllNewsSources.get(headline.source)?.url + '?' + nooze_utm_tag;
  const articleLink = headline.link.includes('?')
    ? `${headline.link}&${nooze_utm_tag}`
    : `${headline.link}?${nooze_utm_tag}`;
  const sourceName = AllNewsSources.get(headline.source)?.name;

  const mediaEmojiMap = {
    video: '🎬',
    audio: '🎧',
    article: '📰',
  } as const;
  const mediaEmoji =
    mediaEmojiMap[headline.media_type as keyof typeof mediaEmojiMap] ?? '';
  const mediaBadgeClass = getMediaBadgeClass(headline.media_type);

  const toggleLike = async () => {
    setLikeLoading(true);
    try {
      const response = await fetch(
        `/api/fast/react?id=${headline.id}&action=like&reaction=${liked}`,
        {
          method: 'POST',
        },
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

  const trackClicks = (
    action:
      | 'like'
      | 'saved'
      | 'shared'
      | 'link'
      | 'info'
      | 'source'
      | 'country',
  ) => {
    try {
      fetch(
        `/api/fast/react?id=${headline.id}&action=${action}&reaction=false`,
        {
          method: 'POST',
        },
      );
    } catch (_error) {
      // do nothing
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
      itemScope
      itemType="https://schema.org/NewsArticle"
      className="card hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
      style={{
        fontFamily: '"Arial", sans-serif',
        margin: '10px',
        padding: '4px',
        border: '4px solid',
        borderRadius: '0',
        imageRendering: 'crisp-edges',
      }}
    >
      <div style={{ padding: '2px 0', position: 'relative' }}>
        <Link
          itemProp="url"
          onClick={(_event) => trackClicks('link')}
          href={articleLink}
          target="_blank"
          rel="noreferrer"
          style={{ overflow: 'clip', display: 'block', position: 'relative' }}
        >
          {headline.img_src && !leadImgErr ? (
            <div style={{ position: 'relative' }}>
              <Image
                itemProp="image"
                src={headline.img_src}
                className="hover:scale-105 hover:rotate-[calc(var(--random-rotation))]"
                width={400}
                height={300}
                alt={headline.img_alt ?? ''}
                onError={() => setLeadImgErr(true)}
                style={{
                  padding: '8px',
                  transition: 'all 0.2s ease-in-out',
                  transform: 'skewX(2deg)',
                }}
              />
              <div
                className="bg-base-100/90 border-2 border-base-content"
                style={{
                  position: 'absolute',
                  top: '0px',
                  left: '2px',
                  padding: '4px 8px',
                  fontFamily: "'Comic Sans MS', 'Arial Black', sans-serif",
                  fontSize: '14px',
                  fontStyle: 'italic',
                  transform: 'skewX(-8deg)',
                }}
              >
                <a
                  onClick={(e) => {
                    e.stopPropagation();
                    trackClicks('source');
                  }}
                  href={sourceURL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base-content no-underline"
                >
                  {mediaEmoji ? (
                    <>
                      <span
                        className={`inline-flex h-5 w-5 items-center justify-center rounded text-[11px] ${mediaBadgeClass}`}
                        aria-hidden="true"
                      >
                        {mediaEmoji}
                      </span>
                      &nbsp;{sourceName ?? ''}
                    </>
                  ) : (
                    sourceName ?? ''
                  )}
                </a>
              </div>
              <div
                className="bg-base-100/90 border-2 border-base-content"
                style={{
                  position: 'absolute',
                  top: '0px',
                  right: '2px',
                  padding: '4px 8px',
                  display: 'inline-block',
                  fontFamily: "'Comic Sans MS', 'Arial Black', sans-serif",
                  fontSize: '14px',
                  fontStyle: 'italic',
                  transform: 'skewX(-8deg)',
                }}
              >
                <time itemProp="datePublished" dateTime={DATE.toISOString()} title={DATE.toLocaleString()} style={{ color: 'var(--bc)' }}>
                  {diffDisplay(DATE)}&nbsp;{countryFlag}
                </time>
              </div>
            </div>
          ) : (
            <div style={{ position: 'relative' }}>
              <div
                className="bg-base-100/90 border-2 border-base-content"
                style={{
                  position: 'absolute',
                  top: '0px',
                  left: '2px',
                  padding: '4px 8px',
                  fontFamily: "'Comic Sans MS', 'Arial Black', sans-serif",
                  fontSize: '14px',
                  fontStyle: 'italic',
                  transform: 'skewX(-8deg)',
                }}
              >
                <a
                  onClick={(e) => {
                    e.stopPropagation();
                    trackClicks('source');
                  }}
                  href={sourceURL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base-content no-underline"
                >
                  {mediaEmoji ? (
                    <>
                      <span
                        className={`inline-flex h-5 w-5 items-center justify-center rounded text-[11px] ${mediaBadgeClass}`}
                        aria-hidden="true"
                      >
                        {mediaEmoji}
                      </span>
                      &nbsp;{sourceName ?? ''}
                    </>
                  ) : (
                    sourceName ?? ''
                  )}
                </a>
              </div>
              <div
                className="bg-base-100/90 border-2 border-base-content"
                style={{
                  position: 'absolute',
                  top: '0px',
                  right: '2px',
                  padding: '4px 8px',
                  display: 'inline-block',
                  fontFamily: "'Comic Sans MS', 'Arial Black', sans-serif",
                  fontSize: '14px',
                  fontStyle: 'italic',
                  transform: 'skewX(-8deg)',
                }}
              >
                <time title={DATE.toLocaleString()}>
                  {diffDisplay(DATE)}&nbsp;{countryFlag}
                </time>
              </div>
            </div>
          )}
          <div
            style={{
              border: '2px solid',
              boxShadow: '4px 4px 0',
              padding: '5px',
              paddingTop: `${headline.img_src && !leadImgErr ? '0px' : '25px'}`,
              fontFamily: "'Comic Sans MS', 'Arial Black', sans-serif",
              fontSize: '18px',
              textAlign: 'center',
              transform: 'skewX(-8deg)',
              margin: `${headline.img_src && !leadImgErr ? '0px' : '20px'
                } 12px 6px 12px`,
            }}
          >
            <h2
              itemProp="headline"
              style={{
                padding: '10px 15px',
                fontFamily: "'Comic Sans MS', 'Arial Black', sans-serif",
                fontSize: '18px',
                textAlign: 'center',
                transform: 'skewX(-8deg)',
              }}
            >
              {headline.headline}&nbsp;↗
            </h2>
          </div>
        </Link>
        <span
          itemProp="publisher"
          itemScope
          itemType="https://schema.org/Organization"
          style={{ display: 'none' }}
        >
          <span itemProp="name">{sourceName}</span>
        </span>
      </div>
      <hr />
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <div className="flex w-full items-center justify-between px-4">
          <div className="indicator">
            <span className="indicator-item badge badge-sm">
              {likeLoading ? '...' : likeCount}
            </span>
            <button
              className={`btn btn-ghost btn-circle ${liked ? 'text-error' : ''}`}
              onClick={toggleLike}
              aria-label="Like"
              title={liked ? 'Unlike' : 'Like'}
            >
              <Heart someBool={liked} />
            </button>
          </div>

          <button
            className={`btn btn-ghost btn-circle ${saved ? 'text-warning' : ''}`}
            onClick={saveToOrRemoveFromCollection}
            aria-label="Bookmark"
            title={saved ? 'Remove bookmark' : 'Bookmark'}
          >
            <Bookmark someBool={saved} />
          </button>

          {canShare ? (
            <button
              className="btn btn-ghost btn-circle"
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
              className="btn btn-ghost btn-circle"
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

export default ComicCard;
