import { isEmpty } from "ramda";

export const getPeopleQuery = (): string => `
SELECT *
FROM people
`;