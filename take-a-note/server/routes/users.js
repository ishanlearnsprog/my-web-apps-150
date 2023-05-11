import express from "express";

import { signInUser, signUpUser } from "../controllers/users.js";

const router = express.Router()

router.post("/user/signin", signInUser);
router.post("/user/signup", signUpUser);

export default router;