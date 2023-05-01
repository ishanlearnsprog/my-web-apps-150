import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import notesRoutes from "./routes/notes.js";

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = "mongodb://127.0.0.1:27017/take-a-note"

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", notesRoutes);

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on PORT ${PORT}`);
        })
    })
    .catch((error) => { console.log(error); })