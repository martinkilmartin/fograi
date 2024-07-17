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
        border: '2px solid',
        borderRadius: '10px',
        borderColor: theme?.colors.primary.value,
        fontFamily: '"Arial", sans-serif',
        margin: '20px 10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Card.Header
        style={{
          backgroundColor: theme?.colors.background.value,
          display: 'flex',
          width: '100%',
          padding: '10px',
          alignItems: 'center',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
        }}
      >
        <Popover isOpen={isOpen} onOpenChange={(open) => infoHandler(open)}>
          <Popover.Trigger>
            <Text
              size={28}
              role="button"
              style={{
                cursor: 'pointer',
                flex: '1',
                paddingLeft: '10px',
                color: theme?.colors.primary.value,
              }}
              aria-expanded={isOpen ? 'true' : 'false'}
              aria-label="Information on news source"
            >
              {emos?.[1]}{' '}
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
                      borderRadius: '0',
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
          style={{
            flex: '8',
            textAlign: 'center',
            fontSize: '28px',
            color: theme?.colors.primary.value,
          }}
        >
          {mediaTypeIcons[headline.media_type as keyof typeof mediaTypeIcons]}
        </Text>
        <div
          style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'flex-end',
            paddingRight: '10px',
          }}
        >
          <Tooltip content={DATE.toLocaleString()}>
            <Badge color="error" size="md" suppressHydrationWarning>
              {diffDisplay(DATE)}
            </Badge>
          </Tooltip>
        </div>
      </Card.Header>
      <hr
        style={{
          borderTop: '2px solid',
          color: theme?.colors.foreground.value,
          margin: '0 10px',
        }}
      />
      <Card.Header
        style={{
          backgroundColor: theme?.colors.background.value,
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
          padding: '10px',
        }}
      >
        <Link
          onClick={(_event) => trackClicks('source')}
          href={sourceURL}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Text
            h2
            size={24}
            weight="bold"
            style={{
              marginBottom: '0',
              textAlign: 'center',
              color: theme?.colors.primary.value,
            }}
          >
            {sourceName ?? ''}
          </Text>
        </Link>
      </Card.Header>
      <hr
        style={{
          borderTop: '2px solid',
          color: theme?.colors.foreground.value,
          margin: '0 10px',
        }}
      />
      <Card.Body style={{ padding: '8px 0' }}>
        <Link
          onClick={(_event) => trackClicks('link')}
          href={headline.link + '?utm_source=nooze.news'}
          target="_blank"
          rel="noreferrer"
          style={{ overflow: 'auto' }}
        >
          <Row justify="center" align="center">
            <Text
              h3
              size={28}
              style={{
                textAlign: 'center',
                color: theme?.colors.primary.value,
              }}
            >
              {headline.headline}&nbsp;↗
            </Text>
          </Row>
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
                margin: '10px 0',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
          )}
        </Link>
      </Card.Body>
      <Card.Divider />
      <Card.Footer
        style={{
          borderRadius: '0',
          borderTop: '2px solid',
          color: theme?.colors.foreground.value,
          padding: '10px',
        }}
      >
        <Grid.Container justify="center">
          <Grid xs={4} justify="center" onClick={toggleLike}>
            <Badge
              disableOutline
              content={likeLoading ? <Loading size="xs" /> : likeCount}
              size="md"
              color={likeCount === '?' ? 'warning' : 'success'}
            >
              <Heart someBool={liked} />
            </Badge>
          </Grid>
          <Grid xs={4} justify="center" onClick={saveToOrRemoveFromCollection}>
            <Bookmark someBool={saved} />
          </Grid>
          <Grid xs={4} justify="center">
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