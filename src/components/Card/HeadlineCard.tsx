import diffDisplay from '@lib/time-format'
import {
  CANewsSources,
  IENewsSources,
  INNewsSources,
} from '@constants/NEWS_SOURCES'
import { Headline } from 'src/types'
import { Badge } from '@components/Badge'
import { TwitterLogo } from '@components/SVG'

type Props = {
  country?: 'ca' | 'ie' | 'in'
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
  }
  const twShare =
    'https://twitter.com/intent/tweet?text=' +
    headline.emos +
    ' ' +
    headline.headline +
    '&url=' +
    headline.link +
    '&hashtags=' +
    headline.section
  return (
    <div
      key={headline.id}
      className="my-2 bg-base-200 card lg:card-side bordered"
    >
      <div className="card-body">
        <p className="absolute top-0 left-0 mt-2 ml-2">
          <a
            className="btn btn-lg btn-circle glass"
            href={twShare}
            target="_blank"
            rel="noreferrer"
          >
            <TwitterLogo />
          </a>
        </p>
        <p className="absolute top-0 right-0 mt-2 mr-2">
          <b>⏱ {diffDisplay(DATE)}</b>
        </p>
        <Badge
          text={headline.emos + ' ' + headline.section}
          color="primary"
          size="lg"
        />
        <h2 className="justify-center mt-3 text-3xl text-center card-title">
          {headline.headline}
        </h2>
        <p className="mb-3 text-2xl text-center">
          <a href={sourceURL} target="_blank" rel="noreferrer">
            <b>
              <i>{sourceName}</i>
            </b>
          </a>
        </p>
        <div className="justify-center card-actions ">
          <button
            className="btn btn-primary"
            onClick={() => {
              window.location.href = headline.link
            }}
          >
            Read in this tab
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              window.open(headline.link, '_blank')
            }}
          >
            Read in new tab
          </button>
        </div>
        <p
          className="absolute bottom-0 left-0 my-2 ml-2"
          onClick={() => clickToCopy(headline.link)}
        >
          <b>Copy link 🔗</b>
        </p>
        <p
          className="absolute bottom-0 right-0 my-2 mr-2"
          onClick={() => backToTop()}
        >
          <b>Back to top ⬆</b>
        </p>
      </div>
    </div>
  )
}

export default HeadlineCard
