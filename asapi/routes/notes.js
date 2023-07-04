import express from "express";

import {
    fetchNotes,
    createNote,
    editNote,
    deleteNote
} from "../controllers/notes.js";

import requireAuth from "../middlewares/auth.js";

const router = express.Router();

router.get("/notes", requireAuth, fetchNotes);
router.post("/notes", requireAuth, createNote);
router.patch("/notes/:noteId", requireAuth, editNote);
router.delete("/notes/:noteId", requireAuth, deleteNote);

export default router;