import { NewsSources } from '@constants/NEWS_SOURCES'

type Props = {
  title: string
}

const SOURCES_SIZE = Array.from(NewsSources).length

const About = ({ title }: Props): JSX.Element => (
  <div className="px-4 text-center">
    <h1 className="w-full mb-4 text-4xl font-extrabold leading-9">{title}</h1>
    <h2 className="text-3xl">
      <a
        className="link link-primary"
        href="https://newsbrandsireland.ie/journalismmatters/"
        target="_blank"
        rel="noreferrer"
      >
        #journalismmatters
      </a>
    </h2>
    <div className="flex flex-col mx-auto my-2">
      <h3 className="mt-3 text-2xl">🇮🇪 🕵 🦸‍♀️ 🦹‍♀️ 🧟‍♀️</h3>
      <p className="mt-1">
        This website continually lists the main headline of{' '}
        <b>{SOURCES_SIZE}</b> Irish online news sources.
      </p>
      <h3 className="mt-3 text-2xl">📝 📧 📨 📩 📤 📥</h3>
      <p className="mt-1">
        <a className="link link-primary" href="/contact">
          Contact us
        </a>{' '}
        with any enquiries, removals, additions or corrections.
      </p>
      <h3 className="mt-3 text-2xl">📰 🗞 📺 📻 🖥</h3>
      <p className="mt-1">
        See{' '}
        <a className="link link-primary" href="/sources">
          sources
        </a>{' '}
        for the full list of sources of headlines.
      </p>
      <h3 className="mt-3 text-2xl">🧪 👩‍🔬 🔬 👨‍💻 🔭 👩‍🔬 📡</h3>
      <p className="mt-1">
        This is an experimental website and is liable to stop updating 📴 or go
        offline 🪦 at any moment . . . 👻
      </p>
    </div>
  </div>
)

export default About
