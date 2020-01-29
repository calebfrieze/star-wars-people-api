import { Request, Response } from "express";
import { getPeople } from "../services/getPeople.service";

const getPeopleController = async (req: Request, res: Response) => {
  try {
    const people = await getPeople();
    
    return res.status(200).json({
      people
    });
  } catch (e) {
    return res.status(500).json({
      error: e.message
    });
  }
};

export default getPeopleController;
