import { useState, useEffect } from 'react'
import { supabase } from '@services/supabase'
import diffDisplay from '@lib/time-format'
import { numberFormat } from '@lib/number-format'
import { NewsSources } from '@constants/NEWS_SOURCES'
import { Headline } from 'src/types'
import { Badge } from '@components/Badge'
import EmojiFy from '@lib/emojis'

const MAX_QUERY = 24

const Headlines = (): JSX.Element => {
  const [total, setTotal] = useState<number>(0)
  const [headlines, setHeadlines] = useState<Headline[]>([])
  const [range, setRange] = useState<number>(0)

  useEffect(() => {
    fetchHeadlineCount()
  }, [])
  useEffect(() => {
    fetchHeadlines()
  }, [])

  const fetchHeadlines = async () => {
    const { data: newHeadlines, error } = await supabase
      .from('headlines')
      .select('*')
      .order('created_at', { ascending: false })
      .range(range, range + (MAX_QUERY - 1))
    if (error) console.error(error)
    if (newHeadlines) {
      setHeadlines([...headlines, ...newHeadlines])
      setRange(range + MAX_QUERY)
    }
  }

  const fetchHeadlineCount = async () => {
    const { count, error } = await supabase
      .from('headlines')
      .select('*', { count: 'exact' })
    if (error) console.error(error)
    if (count) {
      setTotal(count)
    }
  }

  const backToTop = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  const clickToCopy = (link: string) => {
    navigator.clipboard.writeText(link)
  }

  return (
    <div>
      {headlines.length === 0 && (
        <div className="min-h-screen text-center">
          <button className="btn btn-lg btn-primary loading">
            Loading news . . .
          </button>
        </div>
      )}
      {headlines &&
        headlines.map((headline) => {
          const DATE = new Date(headline.created_at)
          return (
            <div
              key={headline.id}
              className="my-2 bg-base-200 card lg:card-side bordered"
            >
              <div className="card-body">
                <p className="absolute top-0 left-0 mt-2 ml-2 text-3xl">
                  {EmojiFy(headline.section)}
                </p>
                <p className="absolute top-0 right-0 mt-2 mr-2">
                  <b>⏱ {diffDisplay(DATE)}</b>
                </p>
                <Badge text={headline.section} color="primary" size="lg" />
                <h2 className="mt-3 text-3xl text-center card-title">
                  {headline.headline}
                </h2>
                <p className="mb-3 text-2xl text-center">
                  <a
                    href={NewsSources.get(headline.source)?.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <b>
                      <i>{NewsSources.get(headline.source)?.name}</i>
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
        })}
      {headlines && headlines.length < total && (
        <div className="text-center">
          <button
            className="btn btn-primary"
            onClick={() => {
              fetchHeadlines()
            }}
          >
            {`Load ${MAX_QUERY} More`}
          </button>
          <p>
            <b>
              <i>{`Loaded ${numberFormat(headlines.length)} of ${numberFormat(
                total
              )}. ${numberFormat(total - headlines.length)} remaining.`}</i>
            </b>
          </p>
        </div>
      )}
      {headlines && headlines.length === total && total > 1 && (
        <div className="text-center">
          <h1 className="text-3xl">
            <a
              href="https://newsbrandsireland.ie/journalismmatters/"
              target="_blank"
              rel="noreferrer"
            >
              #journalismmatters
            </a>
          </h1>
          <p>
            <b>
              <i>🇮🇪 Sin é. Ar aghaidh le do lae. 🦊</i>
            </b>
          </p>
        </div>
      )}
    </div>
  )
}

export default Headlines
