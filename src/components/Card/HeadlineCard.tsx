import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Image as NextUIImage } from '@nextui-org/react';
import {
  Avatar,
  Badge,
  Card,
  Col,
  Grid,
  Popover,
  Row,
  Text,
  User,
  useTheme,
} from '@nextui-org/react';
import Link from 'next/link';
import diffDisplay from '@lib/time-format';
import Info from '@components/SVG/Info';
import { flags } from '@constants/FLAGS';
import { COUNTRIES } from '@constants/COUNTRIES';
import { AllNewsSources } from '@constants/NEWS_SOURCES';
import { Headline } from '../../types';
import { Countries } from '../../types/countries';
import bookmarkImg from '../../../public/img/ic/bookmark.svg';
import bookmarkedImg from '../../../public/img/ic/bookmarked.svg';
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
  const [suffix, setSuffix] = useState<string>('svg');
  const [leadImgErr, setLeadImgErr] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number | '?'>('?');
  const [saved, setSaved] = useState<boolean>(false);
  const DATE = new Date(headline.created_at);
  const country = headline.source.substring(0, 2).toLowerCase();

  const sourceAbout = AllNewsSources.get(headline.source)?.about;
  const sourceURL = AllNewsSources.get(headline.source)?.url;
  const sourceName = AllNewsSources.get(headline.source)?.name;
  const emos = AllNewsSources.get(headline.source)?.emos;
  const est = AllNewsSources.get(headline.source)?.est;
  const flag = flags.get(country);
  const countryName = COUNTRIES.get(country as Countries);

  const toggleLike = async () => {
    try {
      const response = await fetch(
        `/api/fast/react?id=${headline.id}&liked=${liked}`,
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

  const saveToOrRemoveFromCollection = () => {
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
    if (navigator.share) {
      await navigator.share({
        title: headline.headline,
        url: headline.link,
      });
    } else {
      alert(
        `The Web Share API is not supported by your browser: ${window.navigator.userAgent}.`,
      );
    }
  };

  function calculateFontSize(text: string): number {
    const baseSize = 38;
    const reductionFactor = 0.4;

    let newSize = baseSize - text.length * reductionFactor;

    const minimumSize = 12;
    if (newSize < minimumSize) {
      newSize = minimumSize;
    }
    return newSize;
  }

  return (
    <Card
      isHoverable
      variant="bordered"
      style={{
        borderRadius: '0',
        fontFamily: '"Georgia", "Times New Roman", Times, serif',
      }}
    >
      <Card.Header
        style={{
          backgroundColor: theme?.colors.background.value,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Popover>
            <Popover.Trigger>
              <span>
                <Info />
              </span>
            </Popover.Trigger>
            <Popover.Content css={{ px: '$4', py: '$2' }}>
              <Grid.Container
                className="user-twitter-card__container"
                css={{
                  mw: '270px',
                  borderRadius: '$lg',
                  padding: '$sm',
                }}
              >
                <Row justify="space-around" align="center">
                  <User
                    src={`/img/ns/${headline.source}.${suffix}`}
                    name={sourceName ?? ''}
                    description={emos?.join()}
                    css={{ px: 0 }}
                    size="lg"
                    onError={() => setSuffix('png')}
                  />
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
          <Text size={28} weight={'bold'}>
            <Link
              href={
                '/country/' + countryName?.toLowerCase().replaceAll(' ', '-')
              }
            >
              {countryName}
            </Link>
          </Text>
          <Badge color="primary" size="lg" suppressHydrationWarning>
            {diffDisplay(DATE)}
          </Badge>
        </div>
      </Card.Header>
      <hr />
      <Card.Header>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <a href={sourceURL} target="_blank" rel="noreferrer">
            <Text h2 size={calculateFontSize(sourceName ?? '')} weight="bold">
              {sourceName ?? ''}
            </Text>
          </a>
        </div>
      </Card.Header>
      <Card.Body css={{ py: '$2' }}>
        <a
          href={headline.link}
          target="_blank"
          rel="noreferrer"
          style={{ overflow: 'auto' }}
        >
          {headline.img_src && (
            <NextUIImage
              src={leadImgErr ? '/img/no-image.png' : headline.img_src}
              objectFit="cover"
              width={400}
              height={200}
              alt={headline.img_alt ?? ''}
              onError={() => setLeadImgErr(true)}
              style={{
                filter: 'blur(5px)',
              }}
              showSkeleton
            />
          )}
          {!headline.img_src && (
            <Card.Image
              src="/img/no-image.png"
              objectFit="cover"
              width="100%"
              alt="No image for this story"
            />
          )}
          <Row justify="center" align="center">
            <Text h3 color="primary">
              {headline.headline}&nbsp;↗
            </Text>
          </Row>
        </a>
      </Card.Body>
      <Card.Divider />
      <Card.Footer
        style={{
          borderRadius: '0',
        }}
      >
        <Grid.Container justify="center">
          <Grid xs={4} justify="center">
            <Badge
              disableOutline
              content={likeCount}
              size="lg"
              color={likeCount === '?' ? 'warning' : 'success'}
            >
              <Avatar
                squared
                size="lg"
                src={liked ? '/img/ic/liked.svg' : '/img/ic/like.svg'}
                onClick={toggleLike}
              />
            </Badge>
          </Grid>
          <Grid xs={4} justify="center">
            <Image
              src={saved ? bookmarkedImg : bookmarkImg}
              alt={saved ? 'Unsave' : 'Save'}
              height={32}
              onClick={saveToOrRemoveFromCollection}
            />
          </Grid>
          <Grid xs={4} justify="center">
            <Image src={shareImg} alt="Share" height={32} onClick={share} />
          </Grid>
        </Grid.Container>
      </Card.Footer>
    </Card>
  );
};

export default HeadlineCard;
