import { ABOUT_TITLE, TAG_LINE } from '@constants/CONTENT';
import { Container } from '@layouts/Container';
import { Page } from '@layouts/Page';
import { About as AboutLayout } from '@layouts/About';

const About = (): JSX.Element => (
  <Container>
    <Page title={ABOUT_TITLE} heading={TAG_LINE}>
      <AboutLayout />
    </Page>
  </Container>
);

export default About;
