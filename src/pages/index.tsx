/* eslint-disable no-var */
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { supabase } from '@services/supabase'
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

export const getServerSideProps: GetServerSideProps<{ headlines: Array<Headline> }> = async () => {
  const { data } = await supabase
    .from(`last_24_hours`)
    .select('*')
  const headlines: Array<Headline> = [...data as Array<Headline>];
  return {
    props: { headlines },
  }
}
