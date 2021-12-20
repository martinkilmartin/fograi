import { NewsSources } from '@constants/NEWS_SOURCES'

type Props = {
  title: string
}

const SOURCES_SIZE = Array.from(NewsSources).length

const About = ({ title }: Props): JSX.Element => (
  <div className="px-4 text-center">
    <h2 className="w-full mb-4 text-3xl font-extrabold leading-9">{title}</h2>
    <h3 className="text-3xl">
      <a
        className="link link-primary"
        href="https://newsbrandsireland.ie/journalismmatters/"
        target="_blank"
        rel="noreferrer"
      >
        #journalismmatters
      </a>
    </h3>
    <div className="flex flex-col mx-auto my-2">
      <p>
        This website continually lists the main headline of{' '}
        <b>{SOURCES_SIZE}</b> 🇮🇪 Irish online news sources.
      </p>
      <p>
        <a className="link link-primary" href="/contact">
          Contact us
        </a>{' '}
        with any enquiries, removals, additions or corrections.
      </p>
      <p>
        See{' '}
        <a className="link link-primary" href="/sources">
          sources
        </a>{' '}
        for the full list of sources of headlines.
      </p>
      <p>This is an experimental website 👩‍🔬 and is liable to stop updating 📴 or go offline 🪦 at any moment . . . 👻</p>
    </div>
  </div>
)

export default About
