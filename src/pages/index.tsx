import { APP_TITLE, TAG_LINE } from '@constants/CONTENT'
import heroBGImage from '@img/bg/classifieds-browse.webp'
import { Container } from '@layouts/Container'
import { Page } from '@layouts/Page'
import { Hero } from '@layouts/Hero'

const HomePage = (): JSX.Element => (
  <Container>
    <Page title={APP_TITLE} heading={TAG_LINE}>
      <Hero bgImageData={heroBGImage} heading={TAG_LINE} />
    </Page>
  </Container>
)

export default HomePage
