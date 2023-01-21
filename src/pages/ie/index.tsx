import { APP_TITLE } from '@constants/CONTENT'
import { Container } from '@layouts/Container'
import { Page } from '@layouts/Page'
import { Headlines } from '@components/Headlines'

const HomePage = (): JSX.Element => (
  <Container>
    <Page title={APP_TITLE} heading="🇮🇪">
      <Headlines country="ie" />
    </Page>
  </Container>
)

export default HomePage
