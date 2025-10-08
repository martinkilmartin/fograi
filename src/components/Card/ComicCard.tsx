import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import diffDisplay from '@lib/time-format';
import Bookmark from '@components/SVG/Bookmark';
import Heart from '@components/SVG/Heart';
import X from '@components/SVG/X';
import { Badge } from '@components/ui/badge';
import { Card, CardContent, CardFooter } from '@components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@components/ui/tooltip';
import { useTheme } from 'next-themes';
import { AllNewsSources } from '@constants/NEWS_SOURCES';
import { Headline } from '../../types';
import { Countries as CountriesType } from '../../types/countries';
import shareImg from '../../../public/img/ic/share.svg';

type Props = {
  header?: boolean;
  bgImage?: boolean;
  country?: CountriesType;
  headline: Headline;
  idx?: number;
};

const ComicCard = ({ headline }: Props): JSX.Element => {
  const COLLECTION_KEY = 'nooze';

  const { theme } = useTheme();
  const isDark = theme === 'dark';
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

  const cardBackgrounds = {
    video: isDark
      ? 'radial-gradient(circle, black, darkred)'
      : 'radial-gradient(circle, white, red)',
    audio: isDark
      ? 'radial-gradient(circle, black, darkviolet)'
      : 'radial-gradient(circle, white, purple)',
    article: isDark
      ? 'radial-gradient(circle, black, darkblue)'
      : 'radial-gradient(circle, white, blue)',
  };

  const cardBackground =
    cardBackgrounds[headline.media_type as keyof typeof cardBackgrounds];

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

  return (
    <TooltipProvider>
      <Card
      itemScope
      itemType="https://schema.org/NewsArticle"
      className="hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
      style={{
        backgroundImage: cardBackground,
        fontFamily: '"Arial", sans-serif',
        margin: '10px',
        padding: '4px',
        border: '4px solid black',
        borderRadius: '0',
        outline: `${isDark ? '5px solid white' : '5px solid black'}`,
        outlineOffset: '-5px',
        imageRendering: 'crisp-edges',
        boxShadow: `${
          isDark
            ? '0 4px 8px rgba(0, 0, 0, 0.1)'
            : '0 4px 8px rgba(0, 0, 0, 0.1)'
        }`,
      }}
    >
      <CardContent style={{ padding: '2px 0', position: 'relative' }}>
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
                style={{
                  padding: '8px',
                  transition: 'all 0.2s ease-in-out',
                }}
                className="hover:shadow-[8px_8px_0px_rgba(0,0,0,0.8)] hover:scale-105 hover:rotate-[calc(var(--random-rotation))]"
                objectFit="cover"
                width={400}
                height={300}
                alt={headline.img_alt ?? ''}
                onError={() => setLeadImgErr(true)}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '0px',
                  left: '12px',
                  backgroundColor: `${
                    isDark ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)'
                  }`,
                  border: `${isDark ? '2px solid white' : '2px solid black'}`,
                  padding: '4px 8px',
                  fontFamily: "'Comic Sans MS', 'Arial Black', sans-serif",
                  fontSize: '14px',
                  fontStyle: 'italic',
                  boxShadow: `${
                    isDark ? '2px 2px 0 white' : '2px 2px 0 black'
                  }`,
                  transform: 'skewX(-8deg)',
                  zIndex: 10,
                }}
              >
                <Link
                  onClick={(_event) => trackClicks('source')}
                  href={sourceURL}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: `${isDark ? 'white' : 'black'}`,
                    textDecoration: 'none',
                  }}
                >
                  {sourceName ?? ''}
                </Link>
              </div>
              <div
                style={{
                  position: 'absolute',
                  top: '0px',
                  right: '12px',
                  backgroundColor: `${
                    isDark ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)'
                  }`,
                  border: `${isDark ? '2px solid white' : '2px solid black'}`,
                  padding: '4px 8px',
                  display: 'inline-block',
                  fontFamily: "'Comic Sans MS', 'Arial Black', sans-serif",
                  fontSize: '14px',
                  fontStyle: 'italic',
                  boxShadow: `${
                    isDark ? '2px 2px 0 white' : '2px 2px 0 black'
                  }`,
                  transform: 'skewX(-8deg)',
                  zIndex: 10,
                }}
              >
                <Tooltip>
                  <TooltipTrigger>
                    <time itemProp="datePublished" dateTime={DATE.toISOString()}>
                      {diffDisplay(DATE)}
                    </time>
                  </TooltipTrigger>
                  <TooltipContent>
                    {DATE.toLocaleString()}
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          ) : (
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  top: '0px',
                  left: '12px',
                  backgroundColor: `${
                    isDark ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)'
                  }`,
                  border: `${isDark ? '2px solid white' : '2px solid black'}`,
                  padding: '4px 8px',
                  fontFamily: "'Comic Sans MS', 'Arial Black', sans-serif",
                  fontSize: '14px',
                  fontStyle: 'italic',
                  boxShadow: `${
                    isDark ? '2px 2px 0 white' : '2px 2px 0 black'
                  }`,
                  transform: 'skewX(-8deg)',
                  zIndex: 10,
                }}
              >
                <Link
                  onClick={(_event) => trackClicks('source')}
                  href={sourceURL}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: `${isDark ? 'white' : 'black'}`,
                    textDecoration: 'none',
                  }}
                >
                  {sourceName ?? ''}
                </Link>
              </div>
              <div
                style={{
                  position: 'absolute',
                  top: '0px',
                  right: '12px',
                  backgroundColor: `${
                    isDark ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)'
                  }`,
                  border: `${isDark ? '2px solid white' : '2px solid black'}`,
                  padding: '4px 8px',
                  display: 'inline-block',
                  fontFamily: "'Comic Sans MS', 'Arial Black', sans-serif",
                  fontSize: '14px',
                  fontStyle: 'italic',
                  boxShadow: `${
                    isDark ? '2px 2px 0 white' : '2px 2px 0 black'
                  }`,
                  transform: 'skewX(-8deg)',
                  zIndex: 10,
                }}
              >
                <Tooltip>
                  <TooltipTrigger>
                    {diffDisplay(DATE)}
                  </TooltipTrigger>
                  <TooltipContent>
                    {DATE.toLocaleString()}
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          )}
          <div
            style={{
              backgroundColor: `${isDark ? 'black' : 'white'}`,
              border: `${isDark ? '2px solid white' : '2px solid black'}`,
              boxShadow: '4px 4px 0 black',
              padding: '5px',
              fontFamily: "'Comic Sans MS', 'Arial Black', sans-serif",
              fontSize: '18px',
              textAlign: 'center',
              transform: 'skewX(-8deg)',
              margin: `${
                headline.img_src && !leadImgErr ? '0px' : '20px'
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
      </CardContent>
      <hr />
      <CardFooter
        style={{
          marginBottom: '-15px',
          paddingTop: '10px',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex', gap: '8px' }}>
          <div
            onClick={toggleLike}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '4px',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <Badge style={{ marginBottom: '4px' }}>
              {likeLoading ? '...' : likeCount}
            </Badge>
            <Heart someBool={liked} />
          </div>
          <div
            onClick={saveToOrRemoveFromCollection}
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '4px',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <Bookmark someBool={saved} />
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '4px',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {canShare ? (
              <img src={shareImg.src} alt="Share" height={32} onClick={share} />
            ) : (
              <Link
                href={twShare}
                target="_blank"
                rel="noreferrer"
                title="Share on X"
              >
                <Tooltip>
                  <TooltipTrigger>
                    <X />
                  </TooltipTrigger>
                  <TooltipContent>
                    Browser share not supported. Defaulting to X.
                  </TooltipContent>
                </Tooltip>
              </Link>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
    </TooltipProvider>
  );
};

export default ComicCard;
