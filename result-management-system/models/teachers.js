import mongoose from "mongoose";

const teacherSchema = mongoose.Schema({
    teacherId: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    }
});

export const Teacher = mongoose.model("Teahcer", teacherSchema);