import { ROBOT_TITLE, TAG_LINE } from '@constants/CONTENT';
import { Container } from '@layouts/Container';
import { Page } from '@layouts/Page';
import { Robot as RobotLayout } from '@layouts/Robot';

const Robot = (): JSX.Element => (
  <Container>
    <Page title={ROBOT_TITLE} heading={TAG_LINE}>
      <RobotLayout title={ROBOT_TITLE} />
    </Page>
  </Container>
);

export default Robot;
