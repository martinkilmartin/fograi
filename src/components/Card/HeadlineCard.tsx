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
  useTheme,
} from '@nextui-org/react';
import Link from 'next/link';
import diffDisplay from '@lib/time-format';
import Info from '@components/SVG/Info';
import Bookmark from '@components/SVG/Bookmark';
import Heart from '@components/SVG/Heart';
import { COUNTRIES } from '@constants/COUNTRIES';
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
  const DATE = new Date(headline.created_at);
  const country = headline.source.substring(0, 2).toLowerCase();

  const sourceAbout = AllNewsSources.get(headline.source)?.about;
  const sourceURL = AllNewsSources.get(headline.source)?.url;
  const sourceName = AllNewsSources.get(headline.source)?.name;
  const emos = AllNewsSources.get(headline.source)?.emos;
  const est = AllNewsSources.get(headline.source)?.est;
  const countryName = COUNTRIES.get(country as Countries);

  const toggleLike = async () => {
    setLikeLoading(true);
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

  function calculateFontSize(text: string, baseSize = 38): number {
    const reductionFactor = 0.5;

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
          <Popover isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
            <Popover.Trigger>
              <span role="button" aria-expanded={isOpen ? 'true' : 'false'}>
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
                  <a href={sourceURL} target="_blank" rel="noreferrer">
                    <Text
                      h2
                      size={calculateFontSize(sourceName ?? '', 24)}
                      weight="bold"
                      style={{
                        borderRadius: '0',
                        fontFamily:
                          '"Georgia", "Times New Roman", Times, serif',
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
          <Badge size="lg" suppressHydrationWarning>
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
          <Grid xs={4} justify="center" onClick={toggleLike}>
            <Badge
              disableOutline
              content={likeLoading ? <Loading size="xs" /> : likeCount}
              size="lg"
              color={likeCount === '?' ? 'warning' : 'success'}
            >
              <Heart someBool={liked} />
            </Badge>
          </Grid>
          <Grid xs={4} justify="center" onClick={saveToOrRemoveFromCollection}>
            <Bookmark someBool={saved} />
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
