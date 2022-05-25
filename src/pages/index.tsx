import { APP_TITLE, TAG_LINE } from '@constants/CONTENT'
import { Container } from '@layouts/Container'
import { Page } from '@layouts/Page'
import { Hero } from '@layouts/Hero'
import { Headlines } from '@components/Headlines'

const HomePage = (): JSX.Element => (
  <Container>
    <Page title={APP_TITLE} heading={TAG_LINE}>
      <Hero
        links={[
          ['ca', '🇨🇦'],
          ['ie', '🇮🇪'],
          ['in', '🇮🇳'],
          ['us', '🇺🇸'],
        ]}
      />
      <Headlines />
    </Page>
  </Container>
)

export default HomePage
