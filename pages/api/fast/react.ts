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
  const { id, action, reaction } = req.query;
  if (
    !(typeof id === 'string') ||
    (action !== 'like' &&
      action !== 'saved' &&
      action !== 'shared' &&
      action !== 'link' &&
      action !== 'info' &&
      action !== 'source' &&
      action !== 'country') ||
    (reaction !== 'true' && reaction !== 'false')
  ) {
    return res.status(400).end();
  }

  try {
    const data =
      reaction === 'true'
        ? await redis.hincrby(id, action, -1)
        : await redis.hincrby(id, action, 1);
    res.status(200).json({ result: data });
  } catch (error) {
    res.status(500).json({
      error: `Failed to ${reaction === 'true' ? 'decrement' : 'increment'}.`,
    });
  }
}
