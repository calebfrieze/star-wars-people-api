import { Request, Response } from "express";
import createPerson, { Person } from "../services/createPerson.service";

const isValidPersonBody = (data: any): data is Person =>
  typeof data === "object" &&
  typeof data.name === "string" &&
  typeof data.height === "string" &&
  typeof data.mass === "string" &&
  typeof data.hair_color === "string" &&
  typeof data.skin_color === "string" &&
  typeof data.eye_color === "string" &&
  typeof data.birth_year === "string" &&
  typeof data.gender === "string"

const createPersonController = async (req: Request, res: Response) => {
  const { body } = req;

  if (!isValidPersonBody(body)) {
    return res.status(400).json({
      error: "Invalid body"
    })
  }
  try {
    const person = await createPerson(body);

    return res.status(201).json({
      created: "true",
      person
    });
  } catch (e) {
    return res.status(400).json({
      error: e.message
    });
  }
}

export default createPersonController;
