import express from "express";
import bodyParser from "body-parser";

import People from "./api/People";
import refreshPeople from "./api/People/controllers/refreshPeople.controller";

const { env } = process;

const PORT = env.PORT || 9001;

const app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/people", People);

app.use("/refresh-people", refreshPeople)

export const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}
