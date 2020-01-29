import { Request, Response } from "express";

const updatePerson = (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(200).json({
    updated: `Person ${id} was updated`
  });
}

export default updatePerson;
