import { useState, useEffect } from 'react'
import { supabase } from '@services/supabase'

import { Headline } from 'src/types'

import { Alert } from '@components/Alert'

const Headlines = (): JSX.Element => {
  const [headlines, setHeadlines] = useState<Headline[] | null>(null)

  useEffect(() => {
    fetchHeadlines()
  }, [])

  const fetchHeadlines = async () => {
    // eslint-disable-next-line prefer-const
    let { data: headlines, error } = await supabase
      .from('headlines')
      .select('*')
    if (error) console.error(error)
    if (headlines) {
      setHeadlines(headlines)
    }
  }
  return (
    <div>
        {headlines &&
          headlines.map((headline) => (
            <Alert key={headline.id} text={headline.headline} />
          ))}
    </div>
  )
}

export default Headlines
