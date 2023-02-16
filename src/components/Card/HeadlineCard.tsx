import { Button, Card, Grid, Row, Spacer, Text } from '@nextui-org/react'
import diffDisplay from '@lib/time-format'
import {
  CANewsSources,
  IENewsSources,
  INNewsSources,
  UKNewsSources,
  USNewsSources,
} from '@constants/NEWS_SOURCES'
import { Headline } from 'src/types'
import { TwitterLogo, RedditLogo } from '@components/SVG'

type Props = {
  country?: 'ca' | 'ie' | 'in' | 'uk' | 'us'
  headline: Headline
  backToTop: () => void
  clickToCopy: (link: string) => void
}

const HeadlineCard = ({ country = 'ie', headline }: Props): JSX.Element => {
  const DATE = new Date(headline.created_at)
  let sourceURL
  let sourceName
  let flag
  if (country === 'ca') {
    sourceURL = CANewsSources.get(headline.source)?.url
    sourceName = CANewsSources.get(headline.source)?.name
    flag = '🇨🇦'
  } else if (country === 'ie') {
    sourceURL = IENewsSources.get(headline.source)?.url
    sourceName = IENewsSources.get(headline.source)?.name
    flag = '🇮🇪'
  } else if (country === 'in') {
    sourceURL = INNewsSources.get(headline.source)?.url
    sourceName = INNewsSources.get(headline.source)?.name
    flag = '🇮🇳'
  } else if (country === 'uk') {
    sourceURL = UKNewsSources.get(headline.source)?.url
    sourceName = UKNewsSources.get(headline.source)?.name
    flag = '🇬🇧'
  } else if (country === 'us') {
    sourceURL = USNewsSources.get(headline.source)?.url
    sourceName = USNewsSources.get(headline.source)?.name
    flag = '🇺🇸'
  }
  const redditShare =
    'https://www.reddit.com/submit?url=' +
    headline.link +
    '&title=' +
    headline.emos +
    ' ' +
    headline.headline
  const twShare =
    'https://twitter.com/intent/tweet?text=' +
    headline.emos +
    ' ' +
    headline.headline +
    '&url=' +
    headline.link +
    '&hashtags=' +
    headline.section
      .split(' ')
      .map((tag) =>
        tag[0] ? tag[0].toUpperCase() + tag.substring(1).toLowerCase() : ''
      )
      .join(',')
  return (
    <Card>
      <Card.Header>
        <Text size="$md" weight="bold" transform="uppercase">
          {flag}&nbsp;{headline.section.split(' ')[0]}
        </Text>
        <Text
          size="$md"
          weight="bold"
          transform="uppercase"
          css={{ position: 'absolute', right: 8 }}
        >
          ⏱ {diffDisplay(DATE)}
        </Text>
      </Card.Header>
      <Card.Body css={{ py: '$2' }}>
        <Row justify="center" align="center">
          <a href={sourceURL} target="_blank" rel="noreferrer">
            <Text size="$xl" weight={'bold'} color="#242424">
              <i>{sourceName}</i>
            </Text>
          </a>
        </Row>
        {headline.img_src && <Card.Image
          src={headline.img_src}
          width="100%"
          height={340}
          objectFit="cover"
          alt={headline.img_alt}
        />}
        <Row justify="center" align="center">
          <Text h2>
            <a href={headline.link} target="_blank" rel="noreferrer">
              {headline.headline}&nbsp;↗
            </a>
          </Text>
        </Row>
      </Card.Body>
      <Card.Footer>
        <Grid.Container gap={2} justify="center">
          <Button.Group>
            <a href={twShare} target="_blank" rel="noreferrer">
              <TwitterLogo />
              &nbsp;Share on Twitter
            </a>
            <Spacer x={2} />
            <a href={redditShare} target="_blank" rel="noreferrer">
              <RedditLogo />
              &nbsp;Share on Reddit
            </a>
          </Button.Group>
        </Grid.Container>
      </Card.Footer>
    </Card>
  )
}

export default HeadlineCard
