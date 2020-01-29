import { getConnection } from "../../../database";

const deletePersonQuery = `
DELETE FROM people WHERE person_id = ?;
`;

const deleteUser = async (id?: number) => {
  const db = await getConnection({ multipleStatements: true });

  await db.query({
    sql: deletePersonQuery,
    values: [id]
  });

  db.release();
};

export default deleteUser;
