import { GetServerSideProps } from 'next'
import { APP_TITLE, TAG_LINE } from '@constants/CONTENT'
import { Container } from '@layouts/Container'
import { Page } from '@layouts/Page'
import { Headlines } from '@components/Headlines'

const HomePage = (): JSX.Element => (
  <Container>
    <Page title={APP_TITLE} heading={TAG_LINE}>
      <Headlines />
    </Page>
  </Container>
)

export default HomePage

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  }
}
