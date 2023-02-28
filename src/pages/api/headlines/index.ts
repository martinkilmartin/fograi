import type { NextApiRequest, NextApiResponse } from 'next'
import { pagination } from '@lib/getHeadlines'


export default async function handler(_request: NextApiRequest, response: NextApiResponse): Promise<void> {
  const { data } = await pagination();
  response.status(200).send(JSON.stringify({ headlines: data }))
}
