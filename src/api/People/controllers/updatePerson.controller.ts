import { Request, Response } from "express";
import { Person } from "../services/createPerson.service";
import updatePerson from "../services/updatePerson.service";

const isValidPersonBody = (data: any): data is Partial<Person> =>
  typeof data === "object" &&
  (typeof data.name === "string" || data.name === undefined) &&
  (typeof data.height === "string" || data.height === undefined) &&
  (typeof data.mass === "string" || data.mass === undefined) &&
  (typeof data.hair_color === "string" || data.hair_color === undefined) &&
  (typeof data.skin_color === "string" || data.skin_color === undefined) &&
  (typeof data.eye_color === "string" || data.eye_color === undefined) &&
  (typeof data.birth_year === "string" || data.birth_year === undefined) &&
  (typeof data.gender === "string" || data.gender === undefined);

const updatePersonController = async (req: Request, res: Response) => {
  const { body, params } = req
  const { id } = params;
  if (!isValidPersonBody(body)) {
    return res.status(400).json({
      error: "Invalid body"
    });
  }

  try {
    const person = await updatePerson(Number(id), body);

    return res.status(200).json({
      person
    })
  } catch (e) {
    return res.status(500).json({
      error: e.message
    });
  }
}

export default updatePersonController;
