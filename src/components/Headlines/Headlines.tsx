import { useState, useEffect } from 'react'
import { supabase } from '@services/supabase'
import { numberFormat } from '@lib/number-format'
import { Headline } from 'src/types'
import { HeadlineCard } from '@components/Card'
import {
  Button,
  Container,
  Grid,
  Loading,
  Spacer,
  Text,
} from '@nextui-org/react'

const MAX_QUERY = 24

type Props = {
  country?: 'ca' | 'ie' | 'in' | 'uk' | 'us'
}

const Headlines = ({ country = 'ie' }: Props): JSX.Element => {
  const [fetching, setFetching] = useState(false)
  const [total, setTotal] = useState<number>(0)
  const [headlines, setHeadlines] = useState<Headline[]>([])
  const [range, setRange] = useState<number>(0)
  const [newer, setNewer] = useState<number>(0)

  useEffect(() => {
    fetchHeadlineCount()
  }, [])
  useEffect(() => {
    fetchHeadlines()
  }, [])

  const fetchHeadlines = async () => {
    setFetching(true)
    const { data: newHeadlines, error } = await supabase
      .from(`${country}-headlines`)
      .select('*')
      .order('created_at', { ascending: false })
      .range(range, range + (MAX_QUERY - 1))
    if (error) console.error(error)
    if (newHeadlines) {
      const mergedHeadlines = [...headlines, ...newHeadlines]
      setHeadlines([
        ...new Map(
          mergedHeadlines.map((item: Headline) => [item['id'], item])
        ).values(),
      ])
      setRange(range + MAX_QUERY)
    }
    setFetching(false)
  }

  const fetchMoreHeadlines = async () => {
    const CURRENT_TOTAL = total
    await fetchHeadlineCount()
    if (total > CURRENT_TOTAL) setRange(range + (total - CURRENT_TOTAL))
    fetchHeadlines()
  }

  const fetchHeadlineCount = async () => {
    const { count, error } = await supabase
      .from(`${country}-headlines`)
      .select('*', { count: 'exact' })
    if (error) console.error(error)
    if (count) {
      if (total > 0) setNewer(newer + (count - total))
      setTotal(count)
    }
  }

  const backToTop = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  return (
    <Container lg css={{ paddingLeft: '0px', paddingRight: '0px' }}>
      {headlines.length === 0 && (
        <Grid.Container gap={2} justify="center">
          <Grid>
            <Loading type="default" />
          </Grid>
          <Grid>
            <Loading type="points" />
          </Grid>
          <Grid>
            <Loading type="spinner" size="lg" />
          </Grid>
          <Grid>
            <Loading type="points-opacity" />
          </Grid>
          <Grid>
            <Loading type="gradient" />
          </Grid>
        </Grid.Container>
      )}
      <Grid.Container gap={2} justify="center">
        {headlines &&
          headlines.map((headline, index) => (
            <Grid xs={12} md={6} lg={4} xl={3} key={index}>
              <HeadlineCard
                bgImage={index % 2 === 0}
                country={country}
                key={headline.id}
                headline={headline}
              />
              <Spacer y={1} />
            </Grid>
          ))}
      </Grid.Container>
      {headlines && headlines.length < total && (
        <Grid.Container gap={2} justify="center">
          {!fetching && (
            <Grid.Container gap={2} justify="center">
              <Button
                onClick={() => {
                  fetchMoreHeadlines()
                }}
              >
                {`Load ${MAX_QUERY} More`}
              </Button>
            </Grid.Container>
          )}
          {fetching && (
            <Grid.Container gap={2} justify="center">
              <Grid>
                <Loading type="default" />
              </Grid>
              <Grid>
                <Loading type="points" />
              </Grid>
              <Grid>
                <Loading type="spinner" size="lg" />
              </Grid>
              <Grid>
                <Loading type="points-opacity" />
              </Grid>
              <Grid>
                <Loading type="gradient" />
              </Grid>
            </Grid.Container>
          )}
          <Grid>
            <Text weight="bold">
              <i>
                {`Loaded ${numberFormat(headlines.length)} of ${numberFormat(
                  total
                )}. ${numberFormat(total - headlines.length)} remaining.`}{' '}
                {newer ? newer + ' newer headline(s).' : ''}
              </i>
            </Text>
          </Grid>
        </Grid.Container>
      )}
      {headlines && headlines.length === total && total > 1 && (
        <div className="text-center">
          <h1 className="text-3xl">
            <a
              href="https://newsbrandsireland.ie/journalismmatters/"
              target="_blank"
              rel="noreferrer"
            >
              #journalismmatters
            </a>
          </h1>
          <p>
            <b>
              <i>🇮🇪 Sin é. Ar aghaidh le do lae. 🦊</i>
            </b>
          </p>
        </div>
      )}

      <Button
        auto
        size="xs"
        ghost
        onClick={() => backToTop()}
        css={{ position: 'fixed', bottom: '20px', right: '10px' }}
      >
        Top
      </Button>
    </Container>
  )
}

export default Headlines
