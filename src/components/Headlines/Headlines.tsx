import { useState, useEffect } from 'react'
import { supabase } from '@services/supabase'
import { NewsSources } from '@constants/NEWS_SOURCES'
import { Headline } from 'src/types'
import { Badge } from '@components/Badge'

const Headlines = (): JSX.Element => {
  const [headlines, setHeadlines] = useState<Headline[]>()

  useEffect(() => {
    fetchHeadlines()
  }, [])

  const fetchHeadlines = async () => {
    const { data: headlines, error } = await supabase
      .from('headlines')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) console.error(error)
    if (headlines) {
      setHeadlines(headlines)
    }
  }

  return (
    <div>
      {!headlines && (
        <div className="min-h-screen text-center">
          <button className="btn btn-lg btn-primary loading">
            Loading news . . .
          </button>
        </div>
      )}
      {headlines &&
        headlines.map((headline) => (
          <div key={headline.id} className="my-2 bg-base-200 card lg:card-side bordered">
            <div className="card-body">
              <Badge text={headline.section} color="primary" size="lg" />
              <h2 className="mt-3 text-3xl text-center card-title">{headline.headline}</h2>
              <p className="text-lg text-center">
                <a
                  href={NewsSources[headline.source].url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <b><i>{NewsSources[headline.source].name}</i></b>
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
    </div>
  )
}

export default Headlines
