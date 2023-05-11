import { useState, useEffect } from "react";

import { useNotesContext } from "../../hooks/useNotesContext.jsx";
import { createNote, updateNote } from "../../api.jsx";

const NoteForm = () => {
    const { noteId, notes, dispatch } = useNotesContext();
    const [formData, setFormData] = useState({ title: "", text: "" });
    const existingNote = notes ? notes.find((note) => (note._id === noteId)) : null;

    useEffect(() => {
        if (existingNote) setFormData(existingNote);
    }, [existingNote])

    const clear = () => {
        dispatch({ type: "SET_NEW_NOTE", payload: 0 });
        setFormData(({ title: "", text: "" }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (noteId) {
            const res = await updateNote(noteId, formData);
            dispatch({ type: "UPDATE_NOTE", payload: res.data });
        } else {
            const res = await createNote(formData);
            dispatch({ type: "CREATE_NOTE", payload: res.data });
        }
        clear();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title" value={formData.title} onChange={(e) => (setFormData({ ...formData, title: e.target.value }))} />
            <textarea name="text" id="text" placeholder={noteId ? "Edit Note" : "Make Note"} value={formData.text} onChange={(e) => (setFormData({ ...formData, text: e.target.value }))}></textarea>
            <button type="submit">{noteId ? "Edit Note" : "Make Note"}</button>
            <button type="reset" onClick={() => { clear() }}>{noteId ? "Make Note" : "Clear"}</button>
        </form>
    )
}

export default NoteForm;