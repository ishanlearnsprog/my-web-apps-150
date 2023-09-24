import express from "express";

import {
    getStudentLogin,
    postStudentLogin,
    getMyMarksheet
} from "../controllers/students.js";

const router = express.Router();

router.get("/students", getStudentLogin);
router.post("/students", postStudentLogin);

router.get("/students/:studentId", getMyMarksheet);

export const studentRoutes = router;