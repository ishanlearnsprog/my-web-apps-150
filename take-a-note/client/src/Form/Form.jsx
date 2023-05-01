import { useState, useEffect } from "react";
import { getNote } from "../api";

const Form = ({ notes, currentId, setCurrentId, createNote, updateNote }) => {

    const [formData, setFormData] = useState({ "title": "", "text": "" });
    const note = currentId ? notes.find(n => n._id === currentId) : null;

    useEffect(() => {
        if (note) setFormData(note);
    }, [note])

    const clear = (e = null) => {
        if (e) e.preventDefault();
        setCurrentId(0);
        setFormData({ "title": "", "text": "" });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (currentId) {
            updateNote(currentId, formData);
        } else {
            createNote(formData);
        }
        clear()
    }

    return (
        <section>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input type="text" placeholder="Title" name="title" onChange={(e) => { setFormData({ ...formData, "title": e.target.value }) }} value={formData.title} />
                <textarea name="text" placeholder="Make a Note" onChange={(e) => { setFormData({ ...formData, "text": e.target.value }) }} value={formData.text}></textarea>
                <button type="submit">{currentId ? "Edit Note" : "Make Note"}</button>
                <button onClick={(e) => clear(e)}>Clear</button>
            </form>
        </section>
    )
}

export default Form;