import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const data = {
    ...JSON.parse(req.body),
  };
  console.log(JSON.parse(req.body));
  res.status(200).end();
};
