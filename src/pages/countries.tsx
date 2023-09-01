import { COUNTRIES_TITLE, TAG_LINE } from '@constants/CONTENT'
import { Container } from '@layouts/Container'
import { Page } from '@layouts/Page'
import { Countries as CountriesLayout } from '@layouts/Countries'

const Sources = (): JSX.Element => (
  <Container>
    <Page title={COUNTRIES_TITLE} heading={TAG_LINE}>
      <CountriesLayout title={COUNTRIES_TITLE} />
    </Page>
  </Container>
)

export default Sources
