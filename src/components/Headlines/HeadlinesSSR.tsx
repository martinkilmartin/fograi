import { Headline } from 'src/types'
import { HeadlineCard } from '@components/Card'
import {
  Button,
  Container,
  Grid,
  Loading,
  Spacer,
} from '@nextui-org/react'

type Props = {
  headlines: Array<Headline>
}

const HeadlinesSSR = ({ headlines }: Props): JSX.Element => {

  const backToTop = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  return (
    <Container lg css={{ paddingLeft: '0px', paddingRight: '0px' }}>
      {headlines.length === 0 && (
        <Grid.Container gap={2} justify="center">
          <Grid>
            <Loading type="spinner" size="lg" />
          </Grid>
        </Grid.Container>
      )}
      <Grid.Container gap={2} justify="center">
        {headlines &&
          headlines.map((headline, index) => (
            <Grid xs={12} sm={6} md={4} lg={3} key={index}>
              <HeadlineCard
                bgImage={index % 2 === 0}
                country={headline.source.substring(0, 2).toLowerCase() as 'ca' | 'ie' | 'in' | 'uk' | 'us'}
                key={headline.id}
                headline={headline}
              />
              <Spacer y={1} />
            </Grid>
          ))
        }
      </Grid.Container>
      <Button
        auto
        size="xs"
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
