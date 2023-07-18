import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Badge, Card, Grid, Row, Text, useTheme } from '@nextui-org/react';
import diffDisplay from '@lib/time-format';
import { Headline } from 'src/types';
import { Countries } from 'src/types/countries';
import { flags } from '@constants/FLAGS';
import { AllNewsSources } from '@constants/NEWS_SOURCES';

import bookmarkImg from '../../../public/img/ic/bookmark.svg';
import bookmarkedImg from '../../../public/img/ic/bookmarked.svg';
import likeImg from '../../../public/img/ic/like.svg';
import likedImg from '../../../public/img/ic/liked.svg';
import shareImg from '../../../public/img/ic/share.svg';
import transPix from '../../../public/img/trans-pixel.png';

type Props = {
  header?: boolean;
  bgImage?: boolean;
  country?: Countries;
  headline: Headline;
  idx?: number;
};

const HeadlineCard = ({
  bgImage = false,
  headline,
  idx,
}: Props): JSX.Element => {
  const { theme } = useTheme();
  const [suffix, setSuffix] = useState<string>('svg');
  const [leadImgErr, setLeadImgErr] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const DATE = new Date(headline.created_at);
  const country = headline.source.substring(0, 2).toLowerCase();

  const sourceHeaderBG = AllNewsSources.get(headline.source)?.headerBG;
  const sourceURL = AllNewsSources.get(headline.source)?.url;
  const sourceName = AllNewsSources.get(headline.source)?.name;
  const flag = flags.get(country);

  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
    setLiked(likedPosts.includes(headline.id));
  }, [headline.id]);

  const toggleLike = () => {
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

  const copyToClipboard = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(headline.link);
      setCopied(true);
      alert(
        'The link has been copied to your clipboard. You can add paste it to your bookmarks: ' +
          headline.link
      );
    } else {
      setCopied(false);
      alert(
        'Sorry, copying to clipboard is not supported in your browser. You can manually copy the link: ' +
          headline.link
      );
    }
  };

  const share = async () => {
    if (navigator.share) {
      await navigator.share({
        title: headline.headline,
        url: headline.link,
      });
    } else {
      alert(
        `The Web Share API is not supported by your browser: ${window.navigator.userAgent}.`
      );
    }
  };

  return (
    <Card isHoverable variant="bordered" style={{ borderRadius: '0' }}>
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
          <Text size={24} weight="bold">
            {'#' + idx}
          </Text>
          <Text size={28}>{flag}</Text>
          <Text size={24} weight="bold">
            {diffDisplay(DATE)}
          </Text>
        </div>
      </Card.Header>
      <hr />
      <Card.Header
        style={{
          backgroundColor: sourceHeaderBG ?? theme?.colors.background.value,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <a href={sourceURL} target="_blank" rel="noreferrer">
            <Image
              src={`/img/ns/${headline.source}.${suffix}`}
              width={300}
              height={64}
              style={{
                maxHeight: '$3xl',
              }}
              alt={sourceName ?? ''}
              onError={() => setSuffix('png')}
            />
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
          {headline.img_src && bgImage && (
            <Image
              alt={headline.img_alt ?? ''}
              src={leadImgErr ? transPix : headline.img_src}
              fill
              style={{
                objectFit: 'cover',
                opacity: 0.33,
              }}
              onError={() => setLeadImgErr(true)}
            />
          )}
          {headline.img_src && !bgImage && (
            <Card.Image
              src={
                leadImgErr
                  ? '../../../public/img/trans-pixel.png'
                  : headline.img_src
              }
              objectFit="cover"
              width="100%"
              alt={headline.img_alt ?? ''}
              onError={() => setLeadImgErr(true)}
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
          backgroundColor: theme?.colors.accents0.value,
          borderRadius: '0',
        }}
      >
        <Grid.Container justify="center">
          <Grid xs={4} justify="center">
            <div onClick={toggleLike}>
              <Image
                src={liked ? likedImg : likeImg}
                alt={liked ? 'Remove like' : 'Like'}
                height={32}
              />
            </div>
          </Grid>
          <Grid xs={4} justify="center">
            <Image
              src={copied ? bookmarkedImg : bookmarkImg}
              alt={copied ? 'Remove Bookmark' : 'Bookmark'}
              height={32}
              onClick={copyToClipboard}
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
