import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

import { Teacher } from "../models/teachers.js";
import { Student } from "../models/students.js";

export const getTeacherLogin = async (req, res) => {
    try {
        const token = req.signedCookies["id"];
        if (token) throw Error("User already loggef in");
    } catch (error) {
        return res.redirect("/teachers/dashboard");
    }
    try {
        const teachers = await Teacher.find({});
        if (teachers.length === 0) {
            const teacher = new Teacher({ teacherId: 1000, password: "teacher1000" });
            await teacher.save();
        }
        res.status(200).render("teachers/teacher-login", { title: "RMS | Teacher Login" });
    } catch (error) {
        res.status(400).render("error", { message: error.message });
    }
}

export const postTeacherLogin = async (req, res) => {
    try {
        const { teacherId, password } = req.body;
        const teacher = await Teacher.findOne({ teacherId });
        if (!teacher) throw Error("Teacher does not exist");
        if (teacher.password !== password) throw Error("Incorrect Password");
        const token = jwt.sign({ teacherId: teacher.teacherId }, process.env.SECRET_KEY, { expiresIn: "1d" });
        res
            .cookie("id", token, { httpOnly: true, signed: true, maxAge: 1000 * 60 * 60 * 24 })
            .redirect("/teachers/dashboard");
    } catch (error) {
        res.status(401).render("error", { message: error.message })
    }
}

export const getTeacherDashboard = async (req, res) => {
    try {
        const students = await Student.find({});
        res.status(200).render("teachers/teacher-dashboard", { title: "RMS | Teacher Dashboard", students, });
    } catch (error) {
        res.status(400).render("error", { message: error.message });
    }
}

export const postTeacherLogout = async (req, res) => {
    try {
        res.clearCookie("id");
        res.redirect("/");
    } catch (error) {
        res.status(401).render("error", { message: error.message });
    }
}

export const getNewMarksheet = async (req, res) => {
    try {
        res.status(200).render("teachers/marksheet-form", { title: "RMS | New Marksheet" });
    } catch (error) {
        res.status(400).render("error", { message: error.message });
    }
}

export const postNewMarksheet = async (req, res) => {
    try {
        const { studentId, name, birthDate, computerMarks, mathMarks } = req.body;
        const student = await Student.create({ studentId, name, birthDate, computerMarks, mathMarks });
        if (!student) throw Error("Student details could not be stored");
        res.redirect("/teachers/dashboard");
    } catch (error) {
        res.status(400).render("error", { message: error.message });
    }
}

export const getStudentMarksheet = async (req, res) => {
    try {
        const { studentId } = req.params;
        const student = await Student.findOne({ studentId });
        if (!student) throw Error("Student not found");
        res.status(200).render("teachers/student-marksheet", { title: "RMS | Student Marksheet", student });
    } catch (error) {
        res.status(400).render("error", { message: error.message });
    }
}

export const getEditMarksheetForm = async (req, res) => {
    try {
        const { studentId } = req.params;
        const student = await Student.findOne({ studentId });
        if (!student) throw Error("Student not found");
        res.status(200).render("teachers/edit-marksheet-form", { title: "RMS | Edit Marksheet", student })
    } catch (error) {
        res.status(400).render("error", { message: error.message });
    }
}

export const postEditMarksheetForm = async (req, res) => {
    const { studentId, name, computerMarks, mathMarks } = req.body;
    const student = await Student.findOne({ studentId });
    if (!student) throw Error("Student not found");
    student.computerMarks = computerMarks;
    student.mathMarks = mathMarks;
    await student.save();
    res.redirect(`/teachers/marksheet/${student.studentId}`);
}