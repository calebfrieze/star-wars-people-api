import { Request, Response } from "express";

const deletePerson = (req: Request, res: Response) => {
  const { id } = req.params;

  return res.status(200).json({
    deleted: `Person: ${id} was deleted`
  })
}

export default deletePerson;
