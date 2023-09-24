import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

import { Teacher } from "../models/teachers.js";

export const teacherAuth = async (req, res, next) => {
    try {
        const token = req.signedCookies["id"];
        if (!token) throw Error("Id Token not found");
        const data = jwt.verify(token, process.env.SECRET_KEY);
        if (!data.teacherId) throw Error("Teacher ID not found");
        const teacher = await Teacher.findOne({ teacherId: data.teacherId });
        if (!teacher) throw Error("Not Authorized");
        next();
    } catch (error) {
        res.redirect("/teachers");
    }
}