import Note from "../models/notes.js";
import mongoose from "mongoose";

export async function getNotes(req, res) {
    try {
        const notes = await Note.find({});
        res.status(200).json(notes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export async function getNote(req, res) {
    const { id } = req.params
    try {
        const note = await Note.findById(id);
        res.status(200).json(note);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export async function createNote(req, res) {
    const note = req.body;
    const newNote = new Note(note);
    try {
        await newNote.save()
        res.status(201).json(newNote);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export async function editNote(req, res) {
    const { id } = req.params;
    const data = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const updatedNote = await Note.findByIdAndUpdate(id, data, { new: true });
    res.json(updatedNote);
}

export async function deleteNote(req, res) {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    try {
        await Note.findByIdAndRemove(id);
        res.json({ message: "Post deleted successfully." });
    } catch (error) {
        console.log(error);
    }
}