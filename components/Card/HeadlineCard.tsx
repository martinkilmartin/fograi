import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Image as NextUIImage } from '@nextui-org/image';
import { Badge } from '@nextui-org/badge';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Spinner } from '@nextui-org/spinner';
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/popover';
import Link from 'next/link';
import diffDisplay from '@lib/time-format';
import Bookmark from '@components/SVG/Bookmark';
import Heart from '@components/SVG/Heart';
import { AllNewsSources } from '@constants/NEWS_SOURCES';
import { Headline } from '../../types';
import { Countries } from '../../types/countries';
import shareImg from '@img/ic/share.svg';

type Props = {
  header?: boolean;
  bgImage?: boolean;
  country?: Countries;
  headline: Headline;
  idx?: number;
};

const HeadlineCard = ({ headline }: Props): JSX.Element => {
  const COLLECTION_KEY = 'nooze';

  const [liked, setLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number | '?'>('?');
  const [likeLoading, setLikeLoading] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const DATE = new Date(headline.created_at);

  const sourceAbout = AllNewsSources.get(headline.source)?.about;
  const sourceURL = AllNewsSources.get(headline.source)?.url;
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

  const infoHandler = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      trackClicks('info');
    }
  };

  const imageFilter = () => {
    switch (Math.floor(Math.random() * (5 - 0 + 1)) + 0) {
      case 0:
        return 'blur(5px)';
      case 1:
        return 'contrast(5000%)';
      case 2:
        return 'hue-rotate(180deg)';
      case 3:
        return 'invert(100%)';
      case 4:
        return 'saturate(1500%)';
      case 5:
        return 'sepia(100%)';
      default:
        return 'blur(5px)';
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

  return (
    <Card
      isHoverable
      style={{
        borderRadius: '0',
        fontFamily: '"Georgia", "Times New Roman", Times, serif',
      }}
    >
      <CardHeader>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Popover isOpen={isOpen} onOpenChange={(open) => infoHandler(open)}>
            <PopoverTrigger>
              <span
                className="text"
                role="button"
                style={{
                  cursor: 'pointer',
                  fontSize: 48,
                }}
                aria-expanded={isOpen ? 'true' : 'false'}
                aria-label="Information on news source"
              >
                {emos?.[1]}{' '}
              </span>
            </PopoverTrigger>
            <PopoverContent style={{ padding: '3px' }}>
              <div
                className="flex space-x-4 space-y-4 flex-wrap box-border m-[-calc(0.25rem*4)] w-[calc(100%+0.5rem*4)]"
                style={{
                  maxWidth: '270px',
                  borderRadius: '$lg',
                  padding: '$sm',
                }}
              >
                <div className="row">
                  <a href={sourceURL} target="_blank" rel="noreferrer">
                    <h2
                      style={{
                        borderRadius: '0',
                        fontFamily:
                          '"Georgia", "Times New Roman", Times, serif',
                          fontSize: calculateFontSize(sourceName ?? '', 24),
                          fontWeight: 'bold'
                      }}
                    >
                      {emos?.[0]}&nbsp;{sourceName ?? ''}&nbsp;{emos?.[1]}
                    </h2>
                  </a>
                </div>
                <div className="flex space-x-4 space-y-4 flex-wrap box-border m-[-calc(0.25rem*4)] w-[calc(100%+0.5rem*4)]">
                  <div>
                    <span
                      className="text"
                      style={{ marginTop: '1px', fontSize: 14 }}
                      color="#888888"
                    >
                      {sourceAbout}
                    </span>
                  </div>
                </div>
                <div
                  className="flex space-x-4 space-y-4 flex-wrap box-border m-[-calc(0.25rem*4)] w-[calc(100%+0.5rem*4)]"
                  style={{alignContent:"center"}}
                >
                  <div className="row">
                    <div className="col">
                      <span
                        className="text"
                        style={{ fontSize: 18 }}
                        color="#888888"
                      >
                        Since&nbsp;
                        <span
                          className="text"
                          color="foreground"
                          style={{ fontSize: 18 }}
                        >
                          {est}
                        </span>
                      </span>
                    </div>
                    <div className="col">
                      <div className="row">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Link
            onClick={(_event) => trackClicks('source')}
            href={sourceURL!}
            target="_blank"
            rel="noreferrer"
          >
            <h2
              style={{
                textAlign: 'center',
                fontSize: calculateFontSize(sourceName ?? '', 24),
                fontWeight: 'bold'
              }}
            >
              {sourceName ?? ''}
            </h2>
          </Link>
          <Badge color="danger" size="lg" suppressHydrationWarning>
            {diffDisplay(DATE)}
          </Badge>
        </div>
      </CardHeader>
      <hr />
      <CardBody style={{ padding: '0 2' }}>
        <Link
          onClick={(_event) => trackClicks('link')}
          href={headline.link}
          target="_blank"
          rel="noreferrer"
          style={{ overflow: 'auto' }}
        >
          {headline.img_src && (
            <NextUIImage
              src={headline.img_src}
              fallbackSrc="/img/no-image.png"
              width={400}
              height={200}
              alt={headline.img_alt ?? ''}
              style={{
                filter: imageFilter(),
              }}
            />
          )}
          {!headline.img_src && (
            <Image
              src="/img/no-image.png"
              objectFit="cover"
              width={400}
              alt="No image for this story"
            />
          )}
          <div className="row">
            <h3 color="primary">
              {headline.headline}&nbsp;↗
            </h3>
          </div>
        </Link>
      </CardBody>
      <Divider />
      <CardFooter
        style={{
          borderRadius: '0',
        }}
      >
        <div className="flex space-x-4 space-y-4 flex-wrap box-border m-[-calc(0.25rem*4)] w-[calc(100%+0.5rem*4)]">
          <div onClick={toggleLike}>
            <Badge
              disableOutline
              content={likeLoading ? <Spinner /> : likeCount}
              size="lg"
              color={likeCount === '?' ? 'warning' : 'success'}
            >
              <Heart someBool={liked} />
            </Badge>
          </div>
          <div onClick={saveToOrRemoveFromCollection}>
            <Bookmark someBool={saved} />
          </div>
          <div>
            <Image src={shareImg} alt="Share" height={32} onClick={share} />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default HeadlineCard;
