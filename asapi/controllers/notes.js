import Note from "../models/notes.js";
import User from "../models/users.js";

export const fetchNotes = async (req, res) => {
    try {

        const { userId } = req.body;

        const existingUser = await User.findById(userId);
        if (!existingUser) throw Error("USER DOES NOT EXIST");

        const allNotes = await Note.find({ userId });

        res.status(200).json(allNotes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const createNote = async (req, res) => {
    try {

        const { noteData, userId } = req.body;

        const existingUser = await User.findById(userId);
        if (!existingUser) throw Error("USER DOES NOT EXIST");

        const newNote = await Note.create({
            ...noteData,
            userId,
        });

        res.status(200).json(newNote);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const editNote = async (req, res) => {
    try {

        const { noteId } = req.params;
        const { noteData, userId } = req.body;

        const existingUser = await User.findById(userId);
        if (!existingUser) throw Error("USER DOES NOT EXIST");

        const existingNote = await Note.findById(noteId);
        if (!existingNote) throw Error("NOTE DOES NOT EXIST");
        if (existingNote.userId !== userId) throw Error("NOT AUTHORIZED");

        const updatedNote = await Note.findByIdAndUpdate(noteId, {
            ...noteData,
        }, { new: true });

        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteNote = async (req, res) => {
    try {

        const { noteId } = req.params;
        const { userId } = req.body;

        const existingUser = await User.findById(userId);
        if (!existingUser) throw Error("USER DOES NOT EXIST");

        const existingNote = await Note.findById(noteId);
        if (!existingNote) throw Error("NOTE DOES NOT EXIST");
        if (existingNote.userId !== userId) throw Error("NOT AUTHORIZED");

        await Note.findByIdAndDelete(noteId);

        res.status(200).json(noteId);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};