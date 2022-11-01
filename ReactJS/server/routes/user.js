import express from "express";
const router = express.Router();

import { signin, signup, activate, forgotPassword, resetPassword, editProfile } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/activate", activate);
router.post("/forgotpassword", forgotPassword);
router.post("/resetpassword", resetPassword);
router.post("/:id/editprofile", editProfile);

export default router;