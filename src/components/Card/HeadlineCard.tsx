import diffDisplay from '@lib/time-format'
import {
  CANewsSources,
  IENewsSources,
  INNewsSources,
  USNewsSources,
} from '@constants/NEWS_SOURCES'
import { Headline } from 'src/types'
import { TwitterLogo, RedditLogo } from '@components/SVG'

type Props = {
  country?: 'ca' | 'ie' | 'in' | 'us'
  headline: Headline
  backToTop: () => void
  clickToCopy: (link: string) => void
}

const HeadlineCard = ({
  country = 'ie',
  headline,
  backToTop,
  clickToCopy,
}: Props): JSX.Element => {
  const DATE = new Date(headline.created_at)
  let sourceURL
  let sourceName
  if (country === 'ca') {
    sourceURL = CANewsSources.get(headline.source)?.url
    sourceName = CANewsSources.get(headline.source)?.name
  } else if (country === 'ie') {
    sourceURL = IENewsSources.get(headline.source)?.url
    sourceName = IENewsSources.get(headline.source)?.name
  } else if (country === 'in') {
    sourceURL = INNewsSources.get(headline.source)?.url
    sourceName = INNewsSources.get(headline.source)?.name
  } else if (country === 'us') {
    sourceURL = USNewsSources.get(headline.source)?.url
    sourceName = USNewsSources.get(headline.source)?.name
  }
  const redditShare =
    'https://www.reddit.com/submit?url=' +
    headline.link +
    '&title=' +
    headline.emos +
    ' ' +
    headline.headline
  const twShare =
    'https://twitter.com/intent/tweet?text=' +
    headline.emos +
    ' ' +
    headline.headline +
    '&url=' +
    headline.link +
    '&hashtags=' +
    headline.section
      .split(' ')
      .map((tag) =>
        tag[0] ? tag[0].toUpperCase() + tag.substring(1).toLowerCase() : ''
      )
      .join(',')
  return (
    <div
      key={headline.id}
      className="my-2 bg-base-200 card lg:card-side bordered"
    >
      <div className="card-body">
        <p className="absolute top-0 left-0 mt-2 ml-2">
          <b>{headline.section}</b>
        </p>
        <p className="absolute top-0 right-0 mt-2 mr-2">
          <b>⏱ {diffDisplay(DATE)}</b>
        </p>
        <p className="text-2xl text-center">
          <a href={sourceURL} target="_blank" rel="noreferrer">
            <b>
              <i>{sourceName}</i>
            </b>
          </a>
        </p>
        <h2 className="justify-center text-3xl text-center card-title">
          <a
            className="link link-primary"
            href={headline.link}
            target="_blank"
            rel="noreferrer"
          >
            {headline.headline}&nbsp;&#xe164;
          </a>
        </h2>

        <div className="grid grid-cols-4 gap-4">
          <b onClick={() => clickToCopy(headline.link)}>Copy link 🔗</b>
          <a className="btn  btn-secondary gap-2" href={twShare} target="_blank" rel="noreferrer">
            <TwitterLogo />
            &nbsp;Share on Twitter
          </a>
          <a className="btn  btn-secondary gap-2" href={redditShare} target="_blank" rel="noreferrer">
            <RedditLogo />
            &nbsp;Share on Reddit
          </a>
          <b onClick={() => backToTop()}>Back to top ⬆</b>
        </div>
      </div>
    </div>
  )
}

export default HeadlineCard
