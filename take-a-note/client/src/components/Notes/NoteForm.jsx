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
        <form onSubmit={handleSubmit} className="flex flex-col my-10 w-[420px] md:w-[320px]">
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={(e) => (setFormData({ ...formData, title: e.target.value }))}
                className="my-2.5 p-2.5 bg-indigo-900 text-neutral-50 focus:outline-none focus:ring-2 focus:ring-indigo-500" />


            <textarea
                name="text"
                id="text"
                placeholder={noteId ? "Edit Note" : "Make a Note"}
                value={formData.text}
                onChange={(e) => (setFormData({ ...formData, text: e.target.value }))}
                className="my-2.5 p-2.5 bg-indigo-900 text-neutral-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-[250px] resize-none " ></textarea>
            <div className="my-2.5 flex justify-between">
                <button type="submit" className="p-2.5 w-1/2 bg-indigo-900 text-neutral-50">{noteId ? "Edit Note" : "Make Note"}</button>
                <button type="reset" className="p-2.5 w-1/2 bg-indigo-900 text-neutral-50" onClick={() => { clear() }}>{noteId ? "Make Note" : "Clear"}</button>
            </div>
        </form>
    )
}

export default NoteForm;