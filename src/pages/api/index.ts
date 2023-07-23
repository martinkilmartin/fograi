import type { NextApiRequest, NextApiResponse } from 'next';

const HelloWorld = async (
  _request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> => {
  response.status(200).send(JSON.stringify({ hello: 'World' }));
};

export default HelloWorld;
