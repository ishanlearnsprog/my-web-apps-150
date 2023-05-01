import express from "express";
import { getNotes, getNote, createNote, editNote, deleteNote } from "../controllers/notes.js";

const router = express.Router();

router.get("/notes", getNotes);
router.get("/notes/:id", getNote);
router.post("/notes", createNote);
router.put("/notes/:id", editNote);
router.delete("/notes/:id", deleteNote);

export default router;