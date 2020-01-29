import { Request, Response } from "express";

const getPerson = (req: Request, res: Response) => {
  const { id } = req.params;
  return res.status(200).json({
    person: `Person: ${id}`
  });
}

export default getPerson;
