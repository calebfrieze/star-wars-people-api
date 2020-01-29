import { Request, Response } from "express";

const getPerson = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({
    person: `Person: ${id}`
  });
}

export default getPerson;
