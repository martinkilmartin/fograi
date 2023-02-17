
import Image from 'next/image'
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

const HeadlineCard = ({ headline }: Props): JSX.Element => {
  const DATE = new Date(headline.created_at)

  return (
    <Card>
      <Card.Body css={{ py: '$2' }}>
        {headline.img_src && <Image
          alt={headline.img_alt ?? ""}
          src={headline.img_src}
          fill
          style={{
            objectFit: 'cover',
            opacity: 0.33
          }}
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
        <Text
          css={{ position: 'absolute', right: 8 }}
        >
        {diffDisplay(DATE)}
        </Text>
      </Card.Footer>
    </Card>
  )
}

export default HeadlineCard
