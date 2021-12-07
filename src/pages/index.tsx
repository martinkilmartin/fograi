import { APP_TITLE, TAG_LINE } from '@constants/CONTENT'
import { Container } from '@layouts/Container'
import { Page } from '@layouts/Page'
import { Headlines } from '@components/Headlines'

const HomePage = (): JSX.Element => (
  <Container>
    <Page title={APP_TITLE} heading={TAG_LINE}>
      <h1 className="mb-5 text-5xl font-bold text-center">{TAG_LINE}</h1>
      <Headlines />
    </Page>
  </Container>
)

export default HomePage
