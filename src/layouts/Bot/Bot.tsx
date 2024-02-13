import { Text } from '@nextui-org/react';
import Link from 'next/link';

type Props = {
  title: string;
};

const Robot = ({ title }: Props): JSX.Element => (
  <div>
    <Text h1>🤖&nbsp;{title}</Text>
    <Text h2>Purpose</Text>
    <Text>
      <b>nooze-bot</b> crawls particular news websites to index the main
      headline only. This index is used by <Link href="/">nooze.news</Link> to
      list direct links to each indexed headline.
    </Text>
    <Text>
      <b>nooze.news</b> aims support quality journalism and help secure the
      future of newspapers.
    </Text>
    <Text h2>Operator</Text>
    <Text>
      <b>nooze-bot</b> is operated by Sionnach Buí Teoranta (Éireann) and
      Sionnach Solutions (Québec).
    </Text>
    <Text h2>Behavior</Text>
    <Text>
      <b>nooze-bot</b> will only access the homepage at a maximum rate of once
      per 30 minutes.
    </Text>
    <Text>
      <b>nooze-bot</b> will try to index each new main headline that it finds.
    </Text>
    <Text>
      <b>nooze-bot</b> will try to access each new main headline and capture its
      meta data, such as title, tags, image, published date and author.
    </Text>
    <Text>
      <b>nooze-bot</b> does not index or capture the main content of a news
      article.
    </Text>
    <Text>
      <b>nooze-bot</b> is currently hosted in Dublin, Ireland under IP's{' '}
      <code>63-35-201-225</code> and <code>54.155.128.69</code>.
    </Text>
    <Text h2>Rules</Text>
    <Text>
      <b>nooze-bot</b> adheres to rules that it finds in robots.txt.
    </Text>
    <Text h2>Contact</Text>
    <Text>
      <b>Email:</b> <Link href="mailto:info@nooze.news">info@nooze.news</Link>
    </Text>
  </div>
);

export default Robot;
