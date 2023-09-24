import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    studentId: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    computerMarks: {
        type: Number,
        min: 0,
        max: 100,
    },
    mathMarks: {
        type: Number,
        min: 0,
        max: 100,
    }
});

export const Student = mongoose.model("Student", studentSchema);