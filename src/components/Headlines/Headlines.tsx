import { useState, useEffect } from 'react'
import { supabase } from '@services/supabase'
import { numberFormat } from '@lib/number-format'
import { Headline } from 'src/types'
import { HeadlineCard } from '@components/Card'

const MAX_QUERY = 24

type Props = {
  country?: 'ca' | 'ie' | 'in' | 'us'
}

const Headlines = ({ country = 'ie' }: Props): JSX.Element => {
  const [fetching, setFetching] = useState(false)
  const [total, setTotal] = useState<number>(0)
  const [headlines, setHeadlines] = useState<Headline[]>([])
  const [range, setRange] = useState<number>(0)
  const [newer, setNewer] = useState<number>(0)

  useEffect(() => {
    fetchHeadlineCount()
  }, [])
  useEffect(() => {
    fetchHeadlines()
  }, [])

  const fetchHeadlines = async () => {
    setFetching(true)
    const { data: newHeadlines, error } = await supabase
      .from(`${country}-headlines`)
      .select('*')
      .order('created_at', { ascending: false })
      .range(range, range + (MAX_QUERY - 1))
    if (error) console.error(error)
    if (newHeadlines) {
      const mergedHeadlines = [...headlines, ...newHeadlines]
      setHeadlines([
        ...new Map(
          mergedHeadlines.map((item: Headline) => [item['id'], item])
        ).values(),
      ])
      setRange(range + MAX_QUERY)
    }
    setFetching(false)
  }

  const fetchMoreHeadlines = async () => {
    const CURRENT_TOTAL = total
    await fetchHeadlineCount()
    if (total > CURRENT_TOTAL) setRange(range + (total - CURRENT_TOTAL))
    fetchHeadlines()
  }

  const fetchHeadlineCount = async () => {
    const { count, error } = await supabase
      .from(`${country}-headlines`)
      .select('*', { count: 'exact' })
    if (error) console.error(error)
    if (count) {
      if (total > 0) setNewer(newer + (count - total))
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
            Loading Headlines . . .
          </button>
        </div>
      )}
      {headlines &&
        headlines.map((headline) => (
          <HeadlineCard
            country={country}
            key={headline.id}
            headline={headline}
            backToTop={backToTop}
            clickToCopy={clickToCopy}
          />
        ))}
      {headlines && headlines.length < total && (
        <div className="text-center">
          {!fetching && (
            <button
              className="btn btn-primary"
              onClick={() => {
                fetchMoreHeadlines()
              }}
            >
              {`Load ${MAX_QUERY} More`}
            </button>
          )}
          {fetching && (
            <button className="btn btn-lg btn-primary loading">
              Loading more headlines . . .
            </button>
          )}
          <p>
            <b>
              <i>
                {`Loaded ${numberFormat(headlines.length)} of ${numberFormat(
                  total
                )}. ${numberFormat(total - headlines.length)} remaining.`}{' '}
                {newer ? newer + ' newer headline(s).' : ''}
              </i>
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
