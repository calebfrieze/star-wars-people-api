import { Router } from "express";
import getPeople from "./controllers/getPeople.controller";
import getPerson from "./controllers/getPerson.controller";
import createPerson from "./controllers/createPerson.controller";
import updatePerson from "./controllers/updatePerson.controller";
import deletePerson from "./controllers/deletePerson.controller";

const router = Router();

router.get("/", getPeople);

router.get("/:id", getPerson);

router.post("/", createPerson);

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);

export default router;
