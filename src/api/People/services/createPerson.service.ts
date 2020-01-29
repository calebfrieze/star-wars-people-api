import { getConnection } from "../../../database";
import { getPeopleQuery } from "./getPeople.service";

const createPersonQuery = `
INSERT INTO people SET ?;
${getPeopleQuery()} WHERE person_id = (SELECT person_id FROM people ORDER BY created DESC LIMIT 1);
`;

const createPerson = async (personBody: any): Promise<any> => {
  const db = await getConnection({ multipleStatements: true });

  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender
  } = personBody;

  const person = await db.query({
    sql: createPersonQuery,
    values: {
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      birth_year,
      gender
    }
  });

  db.release();

  return person[1];
};

export default createPerson;
