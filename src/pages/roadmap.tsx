import { ROADMAP_TITLE, TAG_LINE } from '@constants/CONTENT';
import { Container } from '@layouts/Container';
import { Page } from '@layouts/Page';
import { Roadmap as RoadmapLayout } from '@layouts/Roadmap';

const Roadmap = (): JSX.Element => (
  <Container>
    <Page title={ROADMAP_TITLE} heading={TAG_LINE}>
      <RoadmapLayout />
    </Page>
  </Container>
);

export default Roadmap;
