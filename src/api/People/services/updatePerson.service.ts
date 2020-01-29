import { getConnection } from "../../../database";
import { getPeopleQuery } from "./getPeople.service";
import { Person } from "./createPerson.service";

const query = `
UPDATE people
SET ?
WHERE person_id = ?;
${getPeopleQuery()} WHERE person_id = ?
`;

const updatePerson = async (
  id: number,
  personBody: Partial<Person>
) => {
  const db = await getConnection({ multipleStatements: true });

  const person = await db.query({
    sql: query,
    values: [personBody, id, id]
  });

  db.release();

  return person[1][0];
};

export default updatePerson;
