import { useState, useEffect } from 'react'
import { supabase } from '@services/supabase'
import { NewsSources } from '@constants/NEWS_SOURCES'
import { Headline } from 'src/types'
import { Badge } from '@components/Badge'

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
        headlines.map((headline) => (
          <div
            key={headline.id}
            className="my-2 bg-base-200 card lg:card-side bordered"
          >
            <div className="card-body">
              <Badge text={headline.section} color="primary" size="lg" />
              <h2 className="mt-3 text-3xl text-center card-title">
                {headline.headline}
              </h2>
              <p className="text-lg text-center">
                <a
                  href={NewsSources[headline.source].url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>
                    <i>{NewsSources[headline.source].name}</i>
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
            </div>
          </div>
        ))}
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
              <i>{`Loaded ${headlines.length} of ${total}. ${
                total - headlines.length
              } remaining.`}</i>
            </b>
          </p>
        </div>
      )}
    </div>
  )
}

export default Headlines
