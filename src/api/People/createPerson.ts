import { Request, Response } from "express";

const createPerson = (req: Request, res: Response) => {
  res.status(201).json({
    created: "true"
  });
}

export default createPerson;
