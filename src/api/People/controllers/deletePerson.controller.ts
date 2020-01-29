import { Request, Response } from "express";
import deletePerson from "../services/deletePerson.service";

const deletePersonController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await deletePerson(Number(id));

    return res.status(200).json({
      message: `Person: ${id} deleted`
    });
  } catch (e) {
    return res.status(500).json({
      error: e.message
    });
  }
}

export default deletePersonController;
