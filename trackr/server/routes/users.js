import express from "express";

const router = express.Router();

router.post("/user/signup", signUpUser);
router.post("/user/signin", signInUser);

export default router;