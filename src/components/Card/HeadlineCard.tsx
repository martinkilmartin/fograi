
import Image from 'next/image'
import { Card, Row, Text } from '@nextui-org/react'
import diffDisplay from '@lib/time-format'
import { Headline } from 'src/types'

import { AllNewsSources } from '@constants/NEWS_SOURCES'

type Props = {
  header?: boolean
  bgImage?: boolean
  country?: 'ca' | 'ie' | 'in' | 'uk' | 'us'
  headline: Headline
}

const HeadlineCard = ({ bgImage = false, headline }: Props): JSX.Element => {
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
    <Card>
      <Card.Header>
        <a href={sourceURL} target="_blank" rel="noreferrer">
          <Image src={`/img/ns/${headline.source}.svg`} width={120} height={32} alt={sourceName ?? ""} />
        </a>
        <Text
          css={{ position: 'absolute', right: 8 }}
        >
          <b>{diffDisplay(DATE)}</b>
        </Text>
      </Card.Header>
      <Card.Body css={{ py: '$2' }}>
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
          <a href={headline.link} target="_blank" rel="noreferrer" style={{ overflow: 'auto' }}>
            <Text h2 color="primary">
              {headline.headline}&nbsp;↗
            </Text>
          </a>
        </Row>
      </Card.Body>
      <Card.Footer>
        <Text size="$xl" weight="bold" transform="uppercase">
          {flag}
        </Text>
      </Card.Footer>
    </Card>
  )
}

export default HeadlineCard
