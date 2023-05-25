import express from "express";

import { signUpUser, signInUser } from "../controllers/users.js";

const router = express.Router();

router.post("/user/signup", signUpUser);
router.post("/user/signin", signInUser);

export default router;