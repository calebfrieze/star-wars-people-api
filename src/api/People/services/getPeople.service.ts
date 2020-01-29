import { isEmpty } from "ramda";
import { getConnection } from "../../../database";

export const getPeopleQuery = (id?: number): string => `
SELECT *
FROM people
${
  id && !isEmpty(id)
    ? `WHERE person_id = ${id}`
    : ""
}
`;

export const getPeople = async (id?: number) => {
  const db = await getConnection({ multipleStatements: true });

  const person = await db.query({
    sql: getPeopleQuery(id)
  });

  db.release();
  if (id) {
    return person[0];
  }
  return person;
}
