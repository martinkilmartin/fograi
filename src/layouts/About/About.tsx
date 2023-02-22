import {
  CANewsSources,
  IENewsSources,
  INNewsSources,
  NZNewsSources,
  OZNewsSources,
  UKNewsSources,
  USNewsSources,
} from '@constants/NEWS_SOURCES'

type Props = {
  title: string
}

const CA_SOURCES_SIZE = Array.from(CANewsSources).length
const IE_SOURCES_SIZE = Array.from(IENewsSources).length
const IN_SOURCES_SIZE = Array.from(INNewsSources).length
const NZ_SOURCES_SIZE = Array.from(NZNewsSources).length
const OZ_SOURCES_SIZE = Array.from(OZNewsSources).length
const UK_SOURCES_SIZE = Array.from(UKNewsSources).length
const US_SOURCES_SIZE = Array.from(USNewsSources).length

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
      <h3 className="mt-3 text-2xl">🇦🇺 🇨🇦 🇮🇳 🇮🇪 🇳🇿 🇬🇧 🇺🇸</h3>
      <p className="mt-1">
        This website continually lists the main headline of{' '}
        <b>{OZ_SOURCES_SIZE}</b> Australian, <b>{CA_SOURCES_SIZE}</b> Canadian, <b>{IN_SOURCES_SIZE}</b> Indian, <b>{IE_SOURCES_SIZE}</b> Irish, <b>{NZ_SOURCES_SIZE}</b> New Zealand, <b>
          {UK_SOURCES_SIZE}</b> UK and <b>{US_SOURCES_SIZE}</b> USA online news sources.
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
      <h3 className="mt-3 text-2xl">🔮 🧱 ⛓ 🪄 🤑 🤯 🪙 💸</h3>
      <p className="mt-1">
        Future development may include permanent storage of headlines on a
        globally distributed proof-of-work blockchain such as{' '}
        <a
          className="link link-primary"
          href="https://ethereumclassic.org/"
          target="_blank"
          rel="noreferrer"
        >
          Ethereum Classic
        </a>
        .
      </p>
    </div>
  </div>
)

export default About
