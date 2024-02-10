import { SOURCES_TITLE, SOURCES_SUBTITLE, TAG_LINE } from '@constants/CONTENT';
import { Container } from '@layouts/Container';
import { Page } from '@layouts/Page';
import { Sources as SourcesLayout } from '@layouts/Sources';

const Sources = (): JSX.Element => (
  <Container>
    <Page title={SOURCES_TITLE} heading={TAG_LINE}>
      <SourcesLayout title={SOURCES_TITLE} subTitle={SOURCES_SUBTITLE} />
    </Page>
  </Container>
);

export default Sources;
