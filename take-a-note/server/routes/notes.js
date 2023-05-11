import express from "express";

import { getNotes, createNote, updateNote, deleteNote } from "../controllers/notes.js";
import requireAuth from "../middlewares/auth.js";

const router = express.Router();

router.get("/notes", requireAuth, getNotes);
router.post("/notes", requireAuth, createNote);
router.put("/notes/:noteId", requireAuth, updateNote);
router.delete("/notes/:noteId", requireAuth, deleteNote);

export default router;