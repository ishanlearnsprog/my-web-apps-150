import mongoose from "mongoose";

import Note from "../models/notes.js"

export const getNotes = async (req, res) => {
    const userId = req.userId;
    try {
        const notes = await Note.find({ userId }).sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const createNote = async (req, res) => {
    const userId = req.userId;
    const data = req.body;
    try {
        const note = await Note.create({ ...data, userId });
        res.status(200).json(note);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const updateNote = async (req, res) => {
    const { noteId } = req.params;
    const data = req.body
    if (!mongoose.Types.ObjectId.isValid(noteId)) {
        return res.status(404).json({ error: 'No such note.' })
    }
    try {
        const note = await Note.findByIdAndUpdate(noteId, { ...data }, { new: true });
        if (!note) {
            return res.status(400).json({ error: 'No such note.' });
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const deleteNote = async (req, res) => {
    const { noteId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(noteId)) {
        return res.status(404).json({ error: 'No such workout' })
    }
    try {
        const note = await Note.findByIdAndDelete(noteId);
        if (!note) {
            return res.status(400).json({ error: 'No such note.' })
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}