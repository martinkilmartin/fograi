
import Image from 'next/image'
import { Card, Grid, Row, Text, useTheme } from '@nextui-org/react'
import diffDisplay from '@lib/time-format'
import { Headline } from 'src/types'

import { AllNewsSources } from '@constants/NEWS_SOURCES'
import { useState } from 'react'

import bookmarkImg from '../../../public/img/ic/bookmark.svg'
import bookmarkedImg from '../../../public/img/ic/bookmarked.svg'
import likeImg from '../../../public/img/ic/like.svg'
import likedImg from '../../../public/img/ic/liked.svg'
import shareImg from '../../../public/img/ic/share.svg'

type Props = {
  header?: boolean
  bgImage?: boolean
  country?: 'ca' | 'ie' | 'in' | 'uk' | 'us'
  headline: Headline
}

const HeadlineCard = ({ bgImage = false, headline }: Props): JSX.Element => {
  const { theme } = useTheme();
  const [suffix, setSuffix] = useState<string>('svg')
  const [liked, setLiked] = useState<boolean>(false)
  const [bookmarked, setBookmarked] = useState<boolean>(false)

  const DATE = new Date(headline.created_at)
  const country = headline.source.substring(0, 2).toLowerCase()
  let flag

  const sourceURL = AllNewsSources.get(headline.source)?.url
  const sourceName = AllNewsSources.get(headline.source)?.name
  if (country === 'ca') flag = '🇨🇦'
  else if (country === 'ie') flag = '🇮🇪'
  else if (country === 'in') flag = '🇮🇳'
  else if (country === 'uk') flag = '🇬🇧'
  else if (country === 'us') flag = '🇺🇸'
  return (
    <Card isHoverable>
      <Card.Header style={{ backgroundColor: theme?.colors.neutralLightHover.value, }}>
        <Text size="$xl" weight="bold" transform="uppercase">
          {flag}&nbsp;
        </Text>
        <a href={sourceURL} target="_blank" rel="noreferrer">
          <Image src={`/img/ns/${headline.source}.${suffix}`} width={300} height={64} style={{
            maxWidth: '33%',
            height: 'auto',
          }} alt={sourceName ?? ""} onError={() => setSuffix('png')} />
        </a>
        <Text
          css={{ position: 'absolute', right: 8 }}
        >
          <b>{diffDisplay(DATE)}</b>
        </Text>
      </Card.Header>
      <Card.Body css={{ py: '$2' }}>
        <a href={headline.link} target="_blank" rel="noreferrer" style={{ overflow: 'auto' }}>
          {(headline.img_src && bgImage) && <Image
            alt={headline.img_alt ?? ""}
            src={headline.img_src}
            fill
            style={{
              objectFit: 'cover',
              opacity: 0.33
            }}
          />}
          {(headline.img_src && !bgImage) && <Card.Image
            src={headline.img_src}
            objectFit="cover"
            width="100%"
            height={140}
            alt={headline.img_alt ?? ""}
          />}
          <Row justify="center" align="center">
            <Text h2 color="primary">
              {headline.headline}&nbsp;↗
            </Text>
          </Row>
        </a>
      </Card.Body>
      <Card.Footer style={{ backgroundColor: theme?.colors.neutralLight.value, }}>
        <Grid.Container justify="center">
          <Grid xs={4} justify="center">
            <Image
              src={liked ? likedImg : likeImg}
              alt={liked ? "Remove like" : "Like"}
              height={32}
              onClick={() => setLiked(!liked)}
            />
          </Grid>
          <Grid xs={4} justify="center">
            <Image
              src={bookmarked ? bookmarkedImg : bookmarkImg}
              alt={bookmarked ? "Remove Bookmark" : "Bookmark"}
              height={32}
              onClick={() => setBookmarked(!bookmarked)}
            />
          </Grid>
          <Grid xs={4} justify="center">
            <Image
              src={shareImg}
              alt="Share"
              height={32}
            />
          </Grid>
        </Grid.Container>
      </Card.Footer>
    </Card>
  )
}

export default HeadlineCard
