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

  const cardBgColors = {
    video: 'hsl(var(--er) / 0.08)',
    audio: 'hsl(var(--in) / 0.08)',
    article: 'hsl(var(--b1))',
  } as const;

  const cardBgColor =
    cardBgColors[headline.media_type as keyof typeof cardBgColors] ?? 'hsl(var(--b1))';

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
      fetch(
        `/api/fast/react?id=${headline.id}&action=saved&reaction=${saved}`,
        {
          method: 'POST',
        },
      );
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
        backgroundColor: cardBgColor,
        fontFamily: '"Arial", sans-serif',
        margin: '10px',
        padding: '4px',
        border: '4px solid',
        borderRadius: '0',
        imageRendering: 'crisp-edges',
      }}
    >
      <div style={{ padding: '2px 0', position: 'relative' }}>
        <span
          aria-label={`Country: ${iso2}`}
          title={iso2}
          style={{ position: 'absolute', top: '-14px', right: '-8px', zIndex: 20, fontSize: '24px' }}
        >
          {countryFlag}
        </span>
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
                className="bg-base-100/90 border-2 border-base-content shadow-[2px_2px_0_hsl(var(--bc))]"
                style={{
                  position: 'absolute',
                  top: '0px',
                  left: '2px',
                  padding: '4px 8px',
                  fontFamily: "'Comic Sans MS', 'Arial Black', sans-serif",
                  fontSize: '14px',
                  fontStyle: 'italic',
                  transform: 'skewX(-8deg)',
                  zIndex: 10,
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
                  {sourceName ?? ''}
                </a>
              </div>
              <div
                className="bg-base-100/90 border-2 border-base-content shadow-[2px_2px_0_hsl(var(--bc))]"
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
                  zIndex: 10,
                }}
              >
                <time itemProp="datePublished" dateTime={DATE.toISOString()} title={DATE.toLocaleString()}>
                  {diffDisplay(DATE)}
                </time>
              </div>
            </div>
          ) : (
            <div style={{ position: 'relative' }}>
              <div
                className="bg-base-100/90 border-2 border-base-content shadow-[2px_2px_0_hsl(var(--bc))]"
                style={{
                  position: 'absolute',
                  top: '0px',
                  left: '12px',
                  padding: '4px 8px',
                  fontFamily: "'Comic Sans MS', 'Arial Black', sans-serif",
                  fontSize: '14px',
                  fontStyle: 'italic',
                  transform: 'skewX(-8deg)',
                  zIndex: 10,
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
                  {sourceName ?? ''}
                </a>
              </div>
              <div
                className="bg-base-100/90 border-2 border-base-content shadow-[2px_2px_0_hsl(var(--bc))]"
                style={{
                  position: 'absolute',
                  top: '0px',
                  right: '12px',
                  padding: '4px 8px',
                  display: 'inline-block',
                  fontFamily: "'Comic Sans MS', 'Arial Black', sans-serif",
                  fontSize: '14px',
                  fontStyle: 'italic',
                  transform: 'skewX(-8deg)',
                  zIndex: 10,
                }}
              >
                <time title={DATE.toLocaleString()}>
                  {diffDisplay(DATE)}
                </time>
              </div>
            </div>
          )}
          <div
            style={{
              border: '2px solid',
              boxShadow: '4px 4px 0',
              padding: '5px',
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
