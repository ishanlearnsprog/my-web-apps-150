import express from "express";

import {
    getTeacherLogin,
    postTeacherLogin,
    getTeacherDashboard,
    getNewMarksheet,
    postTeacherLogout,
    postNewMarksheet,
    getStudentMarksheet,
    getEditMarksheetForm,
    postEditMarksheetForm
} from "../controllers/teachers.js";

import { teacherAuth } from "../middlewares/teacherAuth.js";

const router = express.Router();

router.get("/teachers", getTeacherLogin);
router.post("/teachers", postTeacherLogin);

router.post("/teachers/logout", teacherAuth, postTeacherLogout);

router.get("/teachers/dashboard", teacherAuth, getTeacherDashboard);

router.get("/teachers/marksheet", teacherAuth, getNewMarksheet);
router.post("/teachers/marksheet", teacherAuth, postNewMarksheet);

router.get("/teachers/marksheet/:studentId", teacherAuth, getStudentMarksheet);

router.get("/teachers/marksheet/:studentId/edit", teacherAuth, getEditMarksheetForm);
router.post("/teachers/marksheet/:studentId/edit", teacherAuth, postEditMarksheetForm);

export const teacherRoutes = router;