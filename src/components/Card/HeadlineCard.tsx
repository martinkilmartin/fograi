import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Card, Grid, Row, Text, useTheme } from '@nextui-org/react'
import diffDisplay from '@lib/time-format'
import { Headline } from 'src/types'

import { AllNewsSources } from '@constants/NEWS_SOURCES'

import bookmarkImg from '../../../public/img/ic/bookmark.svg'
import bookmarkedImg from '../../../public/img/ic/bookmarked.svg'
import likeImg from '../../../public/img/ic/like.svg'
import likedImg from '../../../public/img/ic/liked.svg'
import shareImg from '../../../public/img/ic/share.svg'
import transPix from '../../../public/img/trans-pixel.png'

type Props = {
  header?: boolean
  bgImage?: boolean
  country?: 'ca' | 'ie' | 'in' | 'nz' | 'oz' | 'uk' | 'us'
  headline: Headline
}

const HeadlineCard = ({ bgImage = false, headline }: Props): JSX.Element => {
  const { theme } = useTheme();
  const [suffix, setSuffix] = useState<string>('svg')
  const [leadImgErr, setLeadImgErr] = useState<boolean>(false)
  const [liked, setLiked] = useState<boolean>(false)
  const [copied, setCopied] = useState<boolean>(false)
  const DATE = new Date(headline.created_at)
  const country = headline.source.substring(0, 2).toLowerCase()
  let flag

  const sourceURL = AllNewsSources.get(headline.source)?.url
  const sourceName = AllNewsSources.get(headline.source)?.name
  if (country === 'ca') flag = '🇨🇦'
  else if (country === 'ie') flag = '🇮🇪'
  else if (country === 'in') flag = '🇮🇳'
  else if (country === 'nz') flag = '🇳🇿'
  else if (country === 'oz') flag = '🇦🇺'
  else if (country === 'uk') flag = '🇬🇧'
  else if (country === 'us') flag = '🇺🇸'

  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]')
    setLiked(likedPosts.includes(headline.id))
  }, [headline.id])

  const toggleLike = () => {
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]')
    if (likedPosts.includes(headline.id)) {
      const index = likedPosts.indexOf(headline.id)
      likedPosts.splice(index, 1)
    } else {
      likedPosts.push(headline.id)
    }
    localStorage.setItem('likedPosts', JSON.stringify(likedPosts))
    setLiked(!liked)
  }

  const copyToClipboard = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(headline.link);
      setCopied(true);
      alert('The link has been copied to your clipboard. You can add paste it to your bookmarks: ' + headline.link);
    } else {
      setCopied(false);
      alert('Sorry, copying to clipboard is not supported in your browser. You can manually copy the link: ' + headline.link);
    }
  }

  const share = async () => {
    if (navigator.share) {
      await navigator.share({
        title: headline.headline,
        url: headline.link
      })
    } else {
      alert(`The Web Share API is not supported by your browser: ${window.navigator.userAgent}.`)
    }
  }

  return (
    <Card isHoverable variant="bordered" style={{ borderRadius: '0' }}>
      <Card.Header style={{ backgroundColor: theme?.colors.neutralLightHover.value }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text size="$3xl" weight="bold" transform="uppercase">
            {flag}&nbsp;&nbsp;
          </Text>
          <div style={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <a href={sourceURL} target="_blank" rel="noreferrer">
              <Image
                src={`/img/ns/${headline.source}.${suffix}`}
                width={300}
                height={64}
                style={{
                  maxHeight: "$3xl",
                }}
                alt={sourceName ?? ""}
                onError={() => setSuffix("png")}
              />
            </a>
          </div>
          <Text>
            <b>{diffDisplay(DATE)}</b>
          </Text>
        </div>
      </Card.Header>
      <Card.Body css={{ py: '$2' }}>
        <a href={headline.link} target="_blank" rel="noreferrer" style={{ overflow: 'auto' }}>
          {(headline.img_src && bgImage) && <Image
            alt={headline.img_alt ?? ""}
            src={leadImgErr ? transPix : headline.img_src}
            fill
            style={{
              objectFit: 'cover',
              opacity: 0.33
            }}
            onError={() => setLeadImgErr(true)}
          />}
          {(headline.img_src && !bgImage) && <Card.Image
            src={leadImgErr ? '../../../public/img/trans-pixel.png' : headline.img_src}
            objectFit="cover"
            width="100%"
            alt={headline.img_alt ?? ""}
            onError={() => setLeadImgErr(true)}
          />}
          <Row justify="center" align="center">
            <Text h3 color="primary">
              {headline.headline}&nbsp;↗
            </Text>
          </Row>
        </a>
      </Card.Body>
      <Card.Footer style={{ backgroundColor: theme?.colors.neutralLight.value, borderRadius: '0' }}>
        <Grid.Container justify="center">
          <Grid xs={4} justify="center">
            <div
              onClick={toggleLike}>
              <Image
                src={liked ? likedImg : likeImg}
                alt={liked ? "Remove like" : "Like"}
                height={32}
              /></div>
          </Grid>
          <Grid xs={4} justify="center">
            <Image
              src={copied ? bookmarkedImg : bookmarkImg}
              alt={copied ? "Remove Bookmark" : "Bookmark"}
              height={32}
              onClick={copyToClipboard}
            />
          </Grid>
          <Grid xs={4} justify="center">
            <Image
              src={shareImg}
              alt="Share"
              height={32}
              onClick={share}
            />
          </Grid>
        </Grid.Container>
      </Card.Footer>
    </Card>
  )
}

export default HeadlineCard
