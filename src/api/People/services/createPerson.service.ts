import { getConnection } from "../../../database";
import { getPeopleQuery } from "./getPeople.service";

const createPersonQuery = `
INSERT INTO people SET ?;
${getPeopleQuery()} WHERE id = (SELECT id FROM people ORDER BY created DESC LIMIT 1);
`;

const createPerson = async (personBody: any): Promise<any> => {
  const db = await getConnection({ multipleStatements: true });

  const person = await db.query({
    sql: createPersonQuery,
    values: personBody
  });

  db.release();

  return JSON.parse(person[1][0].person);
};

export default createPerson;
