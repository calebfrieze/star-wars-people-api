import { Router } from "express";
import getPeople from "./getPeople";

const router = Router();

router.get("/", getPeople);

router.get("/:id");

router.post("/");

router.put("/:id");

router.delete("/:id");

export default router;
