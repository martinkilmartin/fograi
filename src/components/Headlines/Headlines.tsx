import { useState, useEffect } from 'react'
import { supabase } from '@services/supabase'
import { NewsSources } from '@constants/NEWS_SOURCES'
import { Headline } from 'src/types'

import { Alert } from '@components/Alert'

const Headlines = (): JSX.Element => {
  const [headlines, setHeadlines] = useState<Headline[]>()

  useEffect(() => {
    fetchHeadlines()
  }, [])

  const fetchHeadlines = async () => {
    // eslint-disable-next-line prefer-const
    let { data: headlines, error } = await supabase
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
      {!headlines && <Alert text="Loading news . . ." />}
      {headlines &&
        headlines.map((headline) => (
          <div key={headline.id} className="card lg:card-side bordered">
            <div className="card-body">
              <h2 className="text-center card-title">{headline.headline}</h2>
              <p className="text-lg text-center">
                <a href={NewsSources[headline.source].url} target="_blank" rel="noreferrer">
                  {NewsSources[headline.source].name}
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
