import { Router } from "express";
import { AsyncRouter } from "express-async-router";

import { getCompanyByID } from "./controller.js";

const router = AsyncRouter(Router());

router.get("/company/:id", getCompanyByID);

export default router;