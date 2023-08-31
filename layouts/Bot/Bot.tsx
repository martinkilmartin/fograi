import { Link } from '@nextui-org/link';

type Props = {
  title: string;
};

const Robot = ({ title }: Props): JSX.Element => (
  <div>
    <h1>🤖&nbsp;{title}</h1>
    <h2>Purpose</h2>
    <p>
      <b>nooze-bot</b> crawls particular news websites to index the main
      headline only. This index is used by <Link href="/">nooze.news</Link> to
      list direct links to each indexed headline.
    </p>
    <p>
      <b>nooze.news</b> aims support quality journalism and help secure the
      future of newspapers.
    </p>
    <h2>Operator</h2>
    <p>
      <b>nooze-bot</b> is operated by Sionnach Buí Teoranta (Éireann) and
      Sionnach Solutions (Québec).
    </p>
    <h2>Behavior</h2>
    <p>
      <b>nooze-bot</b> will only access the homepage at a maximum rate of once
      per 30 minutes.
    </p>
    <p>
      <b>nooze-bot</b> will try to index each new main headline that it finds.
    </p>
    <p>
      <b>nooze-bot</b> will try to access each new main headline and capture its
      meta data, such as title, tags, image, published date and author.
    </p>
    <p>
      <b>nooze-bot</b> does not index or capture the main content of a news
      article.
    </p>
    <p>
      <b>nooze-bot</b> is currently hosted in Dublin, Ireland under IP{' '}
      <code>34.244.102.150</code>.
    </p>
    <h2>Rules</h2>
    <p>
      <b>nooze-bot</b> adheres to rules that it finds in robots.txt.
    </p>
    <h2>Contact</h2>
    <p>
      <b>Email:</b> <Link href="mailto:info@nooze.news">info@nooze.news</Link>
    </p>
  </div>
);

export default Robot;
