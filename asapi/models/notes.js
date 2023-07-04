import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        default: "",
    },
    content: {
        type: String,
        default: "",
    },
    userId: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Note = mongoose.model("Note", noteSchema);

export default Note;