import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Image as NextUIImage } from '@nextui-org/react';
import {
  Badge,
  Card,
  Grid,
  Loading,
  Text,
  Tooltip,
  useTheme,
} from '@nextui-org/react';
import Link from 'next/link';
import diffDisplay from '@lib/time-format';
import Bookmark from '@components/SVG/Bookmark';
import Heart from '@components/SVG/Heart';
import X from '@components/SVG/X';
import { AllNewsSources } from '@constants/NEWS_SOURCES';
import { COUNTRIES } from '@constants/COUNTRIES';
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

interface AgoBadgeProps {
  media_type: Headline['media_type'];
  created_at: Date;
}

const cardBorders = {
  video: '#ff0000',
  audio: '#570f8a',
  article: '#99ccff',
};

const AgoBadge = ({ media_type, created_at }: AgoBadgeProps): JSX.Element => {
  if (media_type === 'article') {
    return (
      <Badge color="primary" suppressHydrationWarning>
        📰&nbsp;{diffDisplay(created_at)}
      </Badge>
    );
  } else if (media_type === 'video') {
    return (
      <Badge color={'error'} suppressHydrationWarning>
        📺&nbsp;{diffDisplay(created_at)}
      </Badge>
    );
  } else if (media_type === 'audio') {
    return (
      <Badge color={'secondary'} suppressHydrationWarning>
        🔊&nbsp;{diffDisplay(created_at)}
      </Badge>
    );
  }
  return <Badge suppressHydrationWarning>{diffDisplay(created_at)}</Badge>;
};

const HeadlineCard = ({ headline }: Props): JSX.Element => {
  const COLLECTION_KEY = 'nooze';

  const { theme, isDark } = useTheme();
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
  const emos = AllNewsSources.get(headline.source)?.emos;

  const cardBorder =
    cardBorders[headline.media_type as keyof typeof cardBorders];

  const cardBackgrounds = {
    video: isDark ? '#4c0000' : '#ffe6e6',
    audio: isDark ? '#2e004f' : '#f4e1f7',
    article: isDark ? '#1a3a5f' : '#e6f2ff',
  };

  const cardBackground =
    cardBackgrounds[headline.media_type as keyof typeof cardBackgrounds];

  const headlineColors = {
    video: isDark ? theme?.colors.text.value : theme?.colors.red900.value,
    audio: isDark ? theme?.colors.text.value : theme?.colors.purple900.value,
    article: isDark ? theme?.colors.text.value : theme?.colors.blue900.value,
  };

  const headlineColor =
    headlineColors[headline.media_type as keyof typeof headlineColors];

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
    <Card
      isHoverable
      variant="bordered"
      style={{
        border: `1px solid ${cardBorder}`,
        borderRadius: '10px',
        backgroundColor: cardBackground,
        fontFamily: '"Arial", sans-serif',
        margin: '10px',
        padding: '5px 0px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 15px 25px rgba(0, 0, 0, 0.1)';
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      }}
    >
      <Card.Header
        style={{
          display: 'flex',
          justifyContent: 'space-between', // Aligns content to the right
          alignItems: 'center', // Vertically centers the content
          padding: '2px 2px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Text
            size={18}
            weight="bold"
            style={{ color: theme?.colors.text.value }}
          >
            <Tooltip content={COUNTRIES.get(headline.country as CountriesType)}>
              {emos?.[1]}
            </Tooltip>
          </Text>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link
            onClick={(_event) => trackClicks('source')}
            href={sourceURL}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: '1',
            }}
          >
            <Text
              size={16}
              weight="bold"
              style={{ color: theme?.colors.text.value }}
            >
              {sourceName ?? ''}
            </Text>
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip content={DATE.toLocaleString()}>
            <AgoBadge created_at={DATE} media_type={headline.media_type} />
          </Tooltip>
        </div>
      </Card.Header>
      <Card.Body style={{ padding: '2px 0' }}>
        <Link
          onClick={(_event) => trackClicks('link')}
          href={articleLink}
          target="_blank"
          rel="noreferrer"
          style={{ overflow: 'auto' }}
        >
          {headline.img_src && !leadImgErr && (
            <NextUIImage
              src={headline.img_src}
              objectFit="cover"
              width={'100%'}
              alt={headline.img_alt ?? ''}
              onError={() => setLeadImgErr(true)}
              showSkeleton
            />
          )}
          <Text
            h2
            size={18}
            style={{
              color: headlineColor,
              textAlign: 'center',
            }}
          >
            {headline.headline}&nbsp;↗
          </Text>
        </Link>
      </Card.Body>
      <hr />
      <Card.Footer
        style={{
          marginBottom: '-15px',
          paddingTop: '10px',
          textAlign: 'center',
        }}
      >
        <Grid.Container justify="space-around">
          <Grid onClick={toggleLike}>
            <Badge
              disableOutline
              content={likeLoading ? <Loading size="xs" /> : likeCount}
              size="md"
              color={likeCount === '?' ? 'warning' : 'success'}
            >
              <Heart someBool={liked} />
            </Badge>
          </Grid>
          <Grid onClick={saveToOrRemoveFromCollection}>
            <Bookmark someBool={saved} />
          </Grid>
          <Grid>
            {canShare ? (
              <Image src={shareImg} alt="Share" height={32} onClick={share} />
            ) : (
              <Link
                href={twShare}
                target="_blank"
                rel="noreferrer"
                title="Share on X"
              >
                <Tooltip
                  content={'Browser share not supported. Defaulting to X.'}
                >
                  <X />
                </Tooltip>
              </Link>
            )}
          </Grid>
        </Grid.Container>
      </Card.Footer>
    </Card>
  );
};

export default HeadlineCard;
