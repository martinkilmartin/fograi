import { BOT_TITLE, TAG_LINE } from '@constants/CONTENT';
import { Container } from '@layouts/Container';
import { Page } from '@layouts/Page';
import { Bot as BotLayout } from '@layouts/Bot';

const Bot = (): JSX.Element => (
  <Container>
    <Page title={BOT_TITLE} heading={TAG_LINE}>
      <BotLayout title={BOT_TITLE} />
    </Page>
  </Container>
);

export default Bot;
