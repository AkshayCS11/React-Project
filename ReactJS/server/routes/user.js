import express from "express";
const router = express.Router();

import { signin, signup, activate } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/activate", activate);

export default router;