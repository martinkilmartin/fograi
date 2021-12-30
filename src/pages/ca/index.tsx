import { APP_TITLE } from '@constants/CONTENT'
import { Container } from '@layouts/Container'
import { Page } from '@layouts/Page'
import { Hero } from '@layouts/Hero'
import { Headlines } from '@components/Headlines'

const HomePage = (): JSX.Element => (
  <Container>
    <Page title={APP_TITLE} heading="🇨🇦">
      <Hero heading="🇨🇦" />
      <Headlines country="ca" />
    </Page>
  </Container>
)

export default HomePage
