import dotenv from "dotenv";
dotenv.config()

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import userRoutes from "./routes/users.js";

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(userRoutes);

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        })
    })
    .catch((error) => console.log(error));

export const connection = mongoose.connection;