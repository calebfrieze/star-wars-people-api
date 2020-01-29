import { Router } from "express";
import getPeople from "./getPeople";
import getPerson from "./getPerson";
import createPerson from "./createPerson";
import updatePerson from "./updatePerson";
import deletePerson from "./deletePerson";

const router = Router();

router.get("/", getPeople);

router.get("/:id", getPerson);

router.post("/", createPerson);

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);

export default router;
