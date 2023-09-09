import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import { teacherRoutes } from "./routes/teachers.js";
import { studentRoutes } from "./routes/students.js"

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.set("view engine", "ejs");

app.use(teacherRoutes);
app.use(studentRoutes);

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.render("home", { title: "RMS | HOME" });
})

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        })
    })
    .catch((error) => console.log(error));