import { Request, Response } from "express";
import { getPeople } from "../services/getPeople.service";

const getPerson = async (req: Request, res: Response) => {
  const { id } = req.params;

  try { 
    const person = await getPeople(Number(id));
    return res.status(200).json({
      person
    });
  } catch (e) {
    return res.status(500).json({
      error: e.message
    });
  }
}

export default getPerson;
