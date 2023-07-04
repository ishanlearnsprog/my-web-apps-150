import express from "express";

import {
    signUpUser,
    signInUser,
    refreshAccessToken,
} from "../controllers/users.js";

const router = express.Router();

router.post("/users/signup", signUpUser);
router.post("/users/signin", signInUser);
router.post("/users/refresh", refreshAccessToken);

export default router;