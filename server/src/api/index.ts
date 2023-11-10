import { Router } from "express";

import { getCompanyByID } from "./controller.js";

const router = Router();

router.get("/company/:id", getCompanyByID);

export default router;
