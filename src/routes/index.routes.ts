import { Router } from "express";
import personRouter from "./person.routes";

const router = Router();
router.use(personRouter);

export default router;