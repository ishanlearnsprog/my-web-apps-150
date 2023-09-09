import express from "express";

import { getTeacherLogin } from "../controllers/teachers.js";

const router = express.Router();

router.get("/teachers", getTeacherLogin);

export const teacherRoutes = router;