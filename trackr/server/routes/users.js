import express from "express";

import {
    signUpUser,
    signInUser,
    changeName,
    deleteAccount
} from "../controllers/users.js"
import requireAuth from "../middlewares/auth.js";

const router = express.Router();

router.post("/user/signup", signUpUser);
router.post("/user/signin", signInUser)
router.patch("/user/changename", requireAuth, changeName);
router.delete("/user/delete", requireAuth, deleteAccount);

export default router;