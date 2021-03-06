import {
  CANewsSources,
  IENewsSources,
  INNewsSources,
  USNewsSources,
} from '@constants/NEWS_SOURCES'

type Props = {
  title: string
}

const CA_SOURCES_SIZE = Array.from(CANewsSources).length
const IE_SOURCES_SIZE = Array.from(IENewsSources).length
const IN_SOURCES_SIZE = Array.from(INNewsSources).length
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
      <h3 className="mt-3 text-2xl">๐จ๐ฆ ๐ต ๐ฆธโโ๏ธ ๐ฎ๐ช ๐ฆนโโ๏ธ ๐งโโ๏ธ ๐ฎ๐ณ</h3>
      <p className="mt-1">
        This website continually lists the main headline of{' '}
        <b>{CA_SOURCES_SIZE}</b> Canadian, <b>{IE_SOURCES_SIZE}</b> Irish,{' '}
        <b>{IN_SOURCES_SIZE}</b> Indian and <b>{US_SOURCES_SIZE}</b> USA online
        news sources.
      </p>
      <h3 className="mt-3 text-2xl">๐ ๐ง ๐จ ๐ฉ ๐ค ๐ฅ</h3>
      <p className="mt-1">
        <a className="link link-primary" href="/contact">
          Contact us
        </a>{' '}
        with any enquiries, removals, additions or corrections.
      </p>
      <h3 className="mt-3 text-2xl">๐ฐ ๐ ๐บ ๐ป ๐ฅ</h3>
      <p className="mt-1">
        See{' '}
        <a className="link link-primary" href="/sources">
          sources
        </a>{' '}
        for the full list of sources of headlines.
      </p>
      <h3 className="mt-3 text-2xl">๐งช ๐ฉโ๐ฌ ๐ฌ ๐จโ๐ป ๐ญ ๐ฉโ๐ฌ ๐ก</h3>
      <p className="mt-1">
        This is an experimental website and is liable to stop updating ๐ด or go
        offline ๐ชฆ at any moment . . . ๐ป
      </p>
      <h3 className="mt-3 text-2xl">๐ฎ ๐งฑ โ ๐ช ๐ค ๐คฏ ๐ช ๐ธ</h3>
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
