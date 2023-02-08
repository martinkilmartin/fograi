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
  let bucket: Array<Headline> = [];
  var { data } = await supabase
    .from(`ca-headlines`)
    .select('*')
    .order('created_at', { ascending: false })
    .range(0, 2);
  bucket = [...data as Array<Headline>];
  var { data } = await supabase
    .from(`ie-headlines`)
    .select('*')
    .order('created_at', { ascending: false })
    .range(0, 2);
  bucket = [...bucket, ...data as Array<Headline>];
  var { data } = await supabase
    .from(`in-headlines`)
    .select('*')
    .order('created_at', { ascending: false })
    .range(0, 2);
  bucket = [...bucket, ...data as Array<Headline>];
  var { data } = await supabase
    .from(`uk-headlines`)
    .select('*')
    .order('created_at', { ascending: false })
    .range(0, 2);
  bucket = [...bucket, ...data as Array<Headline>];
  var { data } = await supabase
    .from(`us-headlines`)
    .select('*')
    .order('created_at', { ascending: false })
    .range(0, 2);
  bucket = [...bucket, ...data as Array<Headline>];
  const headlines: Array<Headline> = bucket;
  console.error(new Date(headlines[0].created_at).getMilliseconds());
  console.error(new Date(headlines[0].created_at));
  headlines.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
  return {
    props: { headlines },
  }



}
