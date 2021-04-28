import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log("ouvi pai!");

  res.status(200).json({ ok: true });
};
