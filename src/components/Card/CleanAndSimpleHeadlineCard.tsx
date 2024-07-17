import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Image as NextUIImage } from '@nextui-org/react';
import {
  Badge,
  Card,
  Col,
  Grid,
  Loading,
  Popover,
  Row,
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
import { Headline } from '../../types';
import { Countries } from '../../types/countries';
import shareImg from '../../../public/img/ic/share.svg';

type Props = {
  header?: boolean;
  bgImage?: boolean;
  country?: Countries;
  headline: Headline;
  idx?: number;
};

const HeadlineCard = ({ headline }: Props): JSX.Element => {
  const COLLECTION_KEY = 'nooze';

  const { theme } = useTheme();
  const [leadImgErr, setLeadImgErr] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number | '?'>('?');
  const [likeLoading, setLikeLoading] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [canShare, setShareable] = useState(true);
  const DATE = new Date(headline.created_at);
  // const emojie = headline.emos;
  const sourceAbout = AllNewsSources.get(headline.source)?.about;
  const sourceURL =
    AllNewsSources.get(headline.source)?.url + '?utm_source=nooze.news';
  const sourceName = AllNewsSources.get(headline.source)?.name;
  const emos = AllNewsSources.get(headline.source)?.emos;
  const est = AllNewsSources.get(headline.source)?.est;

  const mediaTypeIcons = {
    video: '📹',
    audio: '🔊',
    image: '📸',
    article: '📰',
  };

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
        url: headline.link + '?utm_source=nooze.news',
      });
    } catch (_e) {
      setShareable(false);
    }
  };

  function calculateFontSize(text: string, baseSize = 38): number {
    const reductionFactor = 0.5;

    let newSize = baseSize - text.length * reductionFactor;

    const minimumSize = 12;
    if (newSize < minimumSize) {
      newSize = minimumSize;
    }
    return newSize;
  }

  const infoHandler = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      trackClicks('info');
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
    headline.link +
    '?utm_source=nooze.news';

  return (
    <Card
      isHoverable
      variant="bordered"
      style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        fontFamily: '"Arial", sans-serif',
        margin: '20px 10px',
        padding: '16px',
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
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 0',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Popover isOpen={isOpen} onOpenChange={(open) => infoHandler(open)}>
            <Popover.Trigger>
              <Text
                size={28}
                role="button"
                style={{
                  cursor: 'pointer',
                  paddingLeft: '10px',
                  color: theme?.colors.primary.value,
                }}
                aria-expanded={isOpen ? 'true' : 'false'}
                aria-label="Information on news source"
              >
                {emos?.[1]}
              </Text>
            </Popover.Trigger>
            <Popover.Content style={{ padding: '16px 8px' }}>
              <Grid.Container
                className="user-twitter-card__container"
                style={{
                  maxWidth: '270px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Row justify="space-around" align="center">
                  <a href={sourceURL} target="_blank" rel="noreferrer">
                    <Text
                      h2
                      size={calculateFontSize(sourceName ?? '', 24)}
                      weight="bold"
                      style={{
                        fontFamily: '"Arial", sans-serif',
                        color: theme?.colors.text.value,
                      }}
                    >
                      {emos?.[0]}&nbsp;{sourceName ?? ''}&nbsp;{emos?.[1]}
                    </Text>
                  </a>
                </Row>
                <Grid.Container className="user-twitter-card__username-container">
                  <Grid xs={12}>
                    <Text
                      className="user-twitter-card__text"
                      size={14}
                      style={{ marginTop: '4px', color: '#888888' }}
                    >
                      {sourceAbout}
                    </Text>
                  </Grid>
                </Grid.Container>
                <Grid.Container
                  className="user-twitter-card__metrics-container"
                  justify="flex-start"
                  alignContent="center"
                >
                  <Row justify="space-around" align="stretch">
                    <Col span={8}>
                      <Text
                        className="user-twitter-card__text"
                        size={18}
                        style={{ color: '#888888' }}
                      >
                        Since&nbsp;
                        <Text
                          b
                          style={{ color: theme?.colors.primary.value }}
                          className="user-twitter-card__text"
                          size={18}
                        >
                          {est}
                        </Text>
                      </Text>
                    </Col>
                    <Col span={4}>
                      <Row>
                        <Link
                          onClick={(_event) => trackClicks('source')}
                          href={`/source/${sourceName
                            ?.toLowerCase()
                            .replaceAll(' ', '-')}`}
                        >
                          <Badge color="primary" size="lg">
                            View All
                          </Badge>
                        </Link>
                      </Row>
                    </Col>
                  </Row>
                </Grid.Container>
              </Grid.Container>
            </Popover.Content>
          </Popover>
          <Text
            size={28}
            style={{ marginLeft: '10px', color: theme?.colors.primary.value }}
          >
            {mediaTypeIcons[headline.media_type as keyof typeof mediaTypeIcons]}
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
              textDecoration: 'none',
              color: theme?.colors.primary.value,
              marginRight: '10px',
            }}
          >
            <Text
              size={24}
              weight="bold"
              style={{ color: theme?.colors.text.value }}
            >
              {sourceName ?? ''}
            </Text>
          </Link>
          <Tooltip content={DATE.toLocaleString()}>
            <Badge
              style={{
                backgroundColor: theme?.colors.primary.value,
                color: '#fff',
                padding: '5px 10px',
                borderRadius: '10px',
                fontSize: '14px',
                cursor: 'pointer',
              }}
              suppressHydrationWarning
            >
              {diffDisplay(DATE)}
            </Badge>
          </Tooltip>
        </div>
      </Card.Header>
      <Card.Body style={{ padding: '16px 0' }}>
        <Link
          onClick={(_event) => trackClicks('link')}
          href={headline.link + '?utm_source=nooze.news'}
          target="_blank"
          rel="noreferrer"
          style={{ overflow: 'auto' }}
        >
          <Text
            h3
            size={28}
            style={{
              textAlign: 'center',
              color: theme?.colors.primary.value,
              marginBottom: '16px',
            }}
          >
            {headline.headline}&nbsp;↗
          </Text>
          {headline.img_src && !leadImgErr && (
            <NextUIImage
              src={headline.img_src}
              objectFit="cover"
              width={400}
              height={200}
              alt={headline.img_alt ?? ''}
              onError={() => setLeadImgErr(true)}
              showSkeleton
              style={{
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
          )}
        </Link>
      </Card.Body>
      <Card.Footer style={{ paddingTop: '10px', textAlign: 'center' }}>
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
              <Image src={shareImg} alt="Share" height={36} onClick={share} />
            ) : (
              <Link
                href={twShare}
                target="_blank"
                rel="noreferrer"
                title="Share on X"
              >
                <Tooltip content={'Browser share not supported. Defaulting to X.'}>
                  <X />
                </Tooltip>
              </Link>
            )}
          </Grid>
        </Grid.Container>
      </Card.Footer>
    </Card>

  );
}

export default HeadlineCard;