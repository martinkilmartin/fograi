import { Headline } from 'src/types'
import { supabase } from '@services/supabase'
import { HeadlineCard } from '@components/Card'
import {
  Button,
  Container,
  Grid,
  Loading,
  Spacer,
} from '@nextui-org/react'
import { useState } from 'react'

type Props = {
  headlines: Array<Headline>
}

const HeadlinesSSR = ({ headlines }: Props): JSX.Element => {
  const [fetching, setFetching] = useState(false)
  const [newHeadlines, setNewHeadlines] = useState<Headline[]>(headlines)

  const fetchMoreHeadlines = async (period = "24", all = "") => {
    setFetching(true)
    const { data } = await supabase
      .from(`last_${period}_hours${all}`)
      .select('*')
    setNewHeadlines([...data as Array<Headline>]);
    setFetching(false)
    backToTop()
  }

  const backToTop = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  return (
    <Container lg css={{ paddingLeft: '0px', paddingRight: '0px' }}>
      {newHeadlines.length === 0 && (
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
        <Button.Group color="warning" size='xs'>
          <Button
            onClick={() => {
              fetchMoreHeadlines("1", "_all")
            }}
          >1h
          </Button>
          <Button
            onClick={() => {
              fetchMoreHeadlines("2", "_all")
            }}
          >2h
          </Button>
        </Button.Group>
        <Button.Group color="success" size='xs'>
          <Button
            onClick={() => {
              fetchMoreHeadlines()
            }}
          >⛲
          </Button>
        </Button.Group>
        <Button.Group color="error" size='xs'>
          <Button
            onClick={() => {
              fetchMoreHeadlines("12", "_all")
            }}
          >12h
          </Button>
          <Button
            onClick={() => {
              fetchMoreHeadlines("24", "_all")
            }}
          >24h
          </Button>
        </Button.Group>
      </Grid.Container>}
      <Button
        auto
        ghost
        onClick={() => backToTop()}
        css={{ position: 'fixed', bottom: '20px', right: '10px' }}
      >
        Top ({newHeadlines.length})
      </Button>
    </Container >
  )
}

export default HeadlinesSSR
