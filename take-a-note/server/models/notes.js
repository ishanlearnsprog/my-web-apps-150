import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title: {
        type: String,
    },
    text: {
        type: String,
    },
    userId: {
        type: String,
        required: true,
    },
}, { timestamps: true }
)

const Note = mongoose.model("Note", noteSchema);

export default Note;