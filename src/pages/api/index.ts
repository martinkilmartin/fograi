import type { NextApiRequest, NextApiResponse } from 'next'
import { getLast24 } from '@lib/getHeadlines'

const HelloWorld = async (
  _request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  const { data } = await getLast24();
  response.status(200).send(JSON.stringify({ headlines: data }))
}

export default HelloWorld
