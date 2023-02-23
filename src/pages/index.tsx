import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { APP_TITLE, TAG_LINE } from '@constants/CONTENT'
import { Container } from '@layouts/Container'
import { Page } from '@layouts/Page'
import { HeadlinesSSR } from '@components/Headlines'
import { Headline } from 'src/types'

const HomePage = ({ headlines }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => (
  <Container>
    <Page title={APP_TITLE} heading={TAG_LINE}>
      <HeadlinesSSR headlines={headlines} />
    </Page>
  </Container>
);

export default HomePage

export const getServerSideProps: GetServerSideProps<{ headlines: Array<Headline> }> = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const host = req.headers.host
  const apiRs = await fetch(`https://${host}/api`);
  const data = await apiRs.json();
  const headlines: Array<Headline> = data.headlines;
  return {
    props: { headlines },
  }
}
