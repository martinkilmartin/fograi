import { NewsSources } from '@constants/NEWS_SOURCES'

type Props = {
  title: string
}

const SOURCES_SIZE = Array.from(NewsSources).length

const About = ({ title }: Props): JSX.Element => (
  <div className="px-4">
    <h2 className="w-full mb-4 text-3xl font-extrabold leading-9 text-center">
      {title}
    </h2>
    <h3 className="text-3xl text-center">
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
        This is simply a listing of the main headline of {SOURCES_SIZE} (and
        growing) Irish online news sources.
      </p>
      <p>
        See{' '}
        <a className="link link-primary" href="/sources">
          sources
        </a>{' '}
        for the full list of sources of headlines.
      </p>
    </div>
  </div>
)

export default About
