import Link from 'next/link';

const About = (): JSX.Element => (
  <div className="container mx-auto px-4 py-8">
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-4">
        Know Everything.
      </h1>
      <h2 className="text-6xl font-bold mb-8">
        Now.
      </h2>
      <p className="text-xl mb-4 font-serif text-shadow">
        Only Headlines.
      </p>
      <p className="text-lg mb-8">
        Get the latest <em>main headline</em> from a broad range of sources.
      </p>
      <p className="text-xl mb-4 font-serif text-shadow">
        Global. Diverse. Non-stop.
      </p>
      <p className="mb-8">
        Discover breaking news, local updates, industry insights, and cultural
        stories from hundreds of outlets and independent journalists worldwide.
      </p>
      <p className="text-xl mb-4 font-serif text-shadow">
        Stay informed.
      </p>
      <p className="mb-8">
        Be the first to know wha&apos;pening everywhere—right now.
      </p>
      <div className="mb-8">
        <Link
          href="https://newsbrandsireland.ie/journalismmatters/"
          target="_blank"
          rel="noreferrer"
          className="text-xl font-bold px-4 py-2"
        >
          #journalismmatters&nbsp;↗
        </Link>
        .
      </div>
      <p className="mb-8">
        The future of journalism is at stake. Support real news from real
        people.
      </p>
      <Link
        href="/contact"
        className="btn btn-primary btn-lg"
      >
        <strong>Contact Us</strong>
      </Link>
    </div>
  </div>
);

export default About;
