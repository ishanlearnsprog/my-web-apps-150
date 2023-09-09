import express from "express";

import { getStudentLogin } from "../controllers/students.js";

const router = express.Router();

router.get("/students", getStudentLogin);

export const studentRoutes = router;