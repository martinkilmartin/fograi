import Link from 'next/link';

type Props = {
  title: string;
};

const Robot = ({ title }: Props): JSX.Element => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-6">🤖&nbsp;{title}</h1>
    <h2 className="text-2xl font-semibold mb-4">Purpose</h2>
    <p className="mb-4">
      <strong>nooze-bot</strong> crawls particular news websites to index the main
      headline only. This index is used by <Link href="/" className="link link-primary">nooze.news</Link> to
      list direct links to each indexed headline.
    </p>
    <p className="mb-6">
      <strong>nooze.news</strong> aims support quality journalism and help secure the
      future of newspapers.
    </p>
    <h2 className="text-2xl font-semibold mb-4">Operator</h2>
    <p className="mb-6">
      <strong>nooze-bot</strong> is operated by Sionnach Buí Teoranta (Éireann) and
      Sionnach Solutions (Québec).
    </p>
    <h2 className="text-2xl font-semibold mb-4">Behavior</h2>
    <p>
      <strong>nooze-bot</strong> will only access the homepage at a maximum rate of once
      per 30 minutes.
    </p>
    <p>
      <strong>nooze-bot</strong> will try to index each new main headline that it finds.
    </p>
    <p>
      <strong>nooze-bot</strong> will try to access each new main headline and capture its
      meta data, such as title, tags, image, published date and author.
    </p>
    <p className="mb-4">
      <strong>nooze-bot</strong> does not index or capture the main content of a news
      article.
    </p>
    <p className="mb-6">
      <strong>nooze-bot</strong> is currently hosted in Dublin, Ireland under IPs{' '}
      <code>63.35.201.225</code> and <code>54.155.128.69</code>.
    </p>
    <h2 className="text-2xl font-semibold mb-4">Rules</h2>
    <p className="mb-6">
      <strong>nooze-bot</strong> adheres to rules that it finds in robots.txt.
    </p>
    <h2 className="text-2xl font-semibold mb-4">Contact</h2>
    <p>
      <strong>Email:</strong> <Link href="mailto:info@nooze.news" className="link link-primary">info@nooze.news</Link>
    </p>
  </div>
);

export default Robot;
