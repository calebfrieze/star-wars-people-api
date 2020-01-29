import express from "express";
import bodyParser from "body-parser";

import People from "./api/People";

const { env } = process;

const PORT = env.PORT || 9001;

const app = express();

app.use(bodyParser.json());

app.use("/people", People);

export const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}
