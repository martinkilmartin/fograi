import { Headline } from 'src/types'
import { HeadlineCard } from '@components/Card'
import {
  Button,
  Container,
  Grid,
  Loading,
  Spacer,
} from '@nextui-org/react'
import { useState } from 'react'
import { pagination } from '@lib/getHeadlines'

type Props = {
  headlines: Array<Headline>
}

const HeadlinesSSR = ({ headlines }: Props): JSX.Element => {
  const [fetching, setFetching] = useState(false)
  const [newHeadlines, setNewHeadlines] = useState<Headline[]>(headlines)

  const fetchMoreHeadlines = async () => {
    setFetching(true);
    const { data } = await pagination(newHeadlines.length, 8);
    const mergedHeadlines = [...newHeadlines, ...data]
    setNewHeadlines([
      ...new Map(
        mergedHeadlines.map((item: Headline) => [item['id'], item])
      ).values(),
    ])
    setFetching(false);
  }

  const backToTop = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  return (
    <Container lg css={{ paddingLeft: '0px', paddingRight: '0px' }}>
      {(newHeadlines.length === 0 || fetching) && (
        <Grid.Container gap={2} justify="center">
          <Grid>
            <Loading type="spinner" size="lg" />
          </Grid>
        </Grid.Container>
      )}
      <Grid.Container gap={2} justify="center">
        {newHeadlines &&
          newHeadlines.map((headline, index) => (
            <Grid xs={12} sm={6} md={4} lg={3} key={index}>
              <HeadlineCard
                bgImage={index % 2 === 0}
                country={headline.source.substring(0, 2).toLowerCase() as 'ca' | 'ie' | 'in' | 'nz' | 'oz' | 'uk' | 'us'}
                key={headline.id}
                headline={headline}
              />
              <Spacer y={1} />
            </Grid>
          ))
        }
      </Grid.Container>
      {!fetching && <Grid.Container gap={2} justify="center">
        <Button.Group color="success">
          <Button
            onClick={() => {
              fetchMoreHeadlines()
            }}
          >{newHeadlines.length}
          </Button>
        </Button.Group>
      </Grid.Container>}
      {fetching && (
        <Grid.Container gap={2} justify="center">
          <Grid>
            <Loading type="spinner" size="lg" />
          </Grid>
        </Grid.Container>
      )}
      <Button
        auto
        ghost
        onClick={() => backToTop()}
        css={{ position: 'fixed', bottom: '20px', right: '10px' }}
      >
        Top
      </Button>
    </Container >
  )
}

export default HeadlinesSSR
