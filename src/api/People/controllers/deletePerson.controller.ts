import { Request, Response } from "express";
import deletePerson from "../services/deletePerson.service";

const deletePersonController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deletePerson(Number(id));

  return res.status(200).json({
    message: `Person: ${id} deleted`
  });
}

export default deletePersonController;
