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

  const sourceAbout = AllNewsSources.get(headline.source)?.about;
  const sourceURL =
    AllNewsSources.get(headline.source)?.url + '?utm_source=nooze.news';
  const sourceName = AllNewsSources.get(headline.source)?.name;
  const emos = AllNewsSources.get(headline.source)?.emos;
  const est = AllNewsSources.get(headline.source)?.est;

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
        borderRadius: '0',
        borderColor: theme?.colors.foreground.value,
        fontFamily: '"Georgia", "Times New Roman", Times, serif',
        margin: '0 10px',
      }}
    >
      <Card.Header
        style={{
          backgroundColor: theme?.colors.background.value,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%',
          padding: '0px',
        }}
      >
        <Popover isOpen={isOpen} onOpenChange={(open) => infoHandler(open)}>
          <Popover.Trigger>
            <Text
              size={22}
              role="button"
              style={{
                cursor: 'pointer',
                flex: '1',
                paddingLeft: '2px',
              }}
              aria-expanded={isOpen ? 'true' : 'false'}
              aria-label="Information on news source"
            >
              {emos?.[1]}{' '}
            </Text>
          </Popover.Trigger>
          <Popover.Content css={{ px: '$4', py: '$2' }}>
            <Grid.Container
              className="user-twitter-card__container"
              css={{
                mw: '270px',
                borderRadius: '$lg',
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
                      fontFamily: '"Georgia", "Times New Roman", Times, serif',
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
                    css={{ mt: '$1' }}
                    color="#888888"
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
                      color="#888888"
                    >
                      Since&nbsp;
                      <Text
                        b
                        color="foreground"
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
        <Link
          style={{ flex: '8' }}
          onClick={(_event) => trackClicks('source')}
          href={sourceURL}
          target="_blank"
          rel="noreferrer"
        >
          <Text
            h2
            size={20}
            weight="bold"
            style={{
              textAlign: 'center',
              verticalAlign: 'middle',
            }}
          >
            {sourceName ?? ''}
          </Text>
        </Link>
        <div
          style={{
            flex: '1',
          }}
        >
          <Tooltip content={DATE.toLocaleString()}>
            <Badge color="error" size="sm" suppressHydrationWarning>
              {diffDisplay(DATE)}
            </Badge>
          </Tooltip>
        </div>
      </Card.Header>
      <hr
        style={{
          borderTop: '2px solid',
          color: theme?.colors.foreground.value,
        }}
      />
      <Card.Body css={{ py: '$2' }}>
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
              size={32}
              color="primary"
              style={{
                textAlign: 'center',
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
            {canShare && (
              <Image src={shareImg} alt="Share" height={36} onClick={share} />
            )}
            {!canShare && (
              <Link
                href={twShare}
                target="_blank"
                rel="noreferrer"
                title="Share on X"
              >
                <Tooltip
                  content={'Browser share not supported. Defaulting to X.'}
                >
                  {' '}
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
