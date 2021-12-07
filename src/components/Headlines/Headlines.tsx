import { useState, useEffect } from 'react'
import { supabase } from '@services/supabase'

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
          <div key={headline.id} className="shadow-lg card">
            <a href={headline.link} target="_blank" rel="noreferrer">
              <div className="card-body">
                <h2 className="text-center card-title">{headline.headline}</h2>
                <p className="text-lg text-center">{headline.source}</p>
              </div>
            </a>
          </div>
        ))}
    </div>
  )
}

export default Headlines
