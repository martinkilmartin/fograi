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

  const clickToCopy = (link: string) => {
    navigator.clipboard.writeText(link)
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
      {headlines &&
        headlines.map((headline) => (
          <>
            <HeadlineCard
              country={headline.source.substring(0, 2).toLowerCase() as 'ca' | 'ie' | 'in' | 'uk' | 'us'}
              key={headline.id}
              headline={headline}
              backToTop={backToTop}
              clickToCopy={clickToCopy}
            />
            <Spacer y={1} />
          </>
        ))}
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

export default HeadlinesSSR
