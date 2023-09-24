import { Student } from "../models/students.js";

export const getStudentLogin = (req, res) => {
    try {
        res.render("students/student-login", { title: "RMS | Student Login" });
    } catch (error) {
        res.status(400).render("error", { message: error.message });
    }
}

export const postStudentLogin = async (req, res) => {
    try {
        const { studentId, birthDate } = req.body;
        const student = await Student.findOne({ studentId });
        if (!student) throw Error("Student not found");
        const ddb = new Date(student.birthDate);
        const din = new Date(birthDate);
        if (ddb.getTime() !== din.getTime()) throw Error("Incorrect Credentials");
        res.redirect(`/students/${student.studentId}`);
    } catch (error) {
        res.status(400).render("error", { message: error.message });
    }
}

export const getMyMarksheet = async (req, res) => {
    try {
        const { studentId } = req.params;
        const student = await Student.findOne({ studentId });
        if (!student) throw Error("Student not found");
        res.render("students/my-marksheet", { title: "RMS | My Marksheet", student })
    } catch (error) {
        res.status(400).render("error", { message: error.message });
    }
}