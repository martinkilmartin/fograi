import { Redis } from '@upstash/redis';
import { NextApiRequest, NextApiResponse } from 'next';

const redis = new Redis({
  url: process.env.UPSTASH_REST_API_DOMAIN ?? '',
  token: process.env.UPSTASH_REST_API_TOKEN ?? '',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  const { id } = req.query;
  if (!id) {
    return res.status(400).end();
  }
  if (typeof id === 'string') {
    try {
      const data = await redis.get(id);
      res.status(200).json({ result: data });
    } catch (error) {
      res.status(500).json({
        error: `Failed to read likes for ${id}.`,
      });
    }
  } else {
    return res.status(400).end();
  }
}
