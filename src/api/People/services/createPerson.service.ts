import { getConnection } from "../../../database";
import { getPeopleQuery } from "./getPeople.service";

export interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

const createPersonQuery = `
INSERT INTO people SET ?;
${getPeopleQuery()} WHERE person_id = (SELECT person_id FROM people ORDER BY created DESC LIMIT 1);
`;

const createPerson = async (personBody: Person): Promise<Person> => {
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
