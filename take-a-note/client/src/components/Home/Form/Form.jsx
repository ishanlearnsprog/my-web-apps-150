import { useState, useEffect } from "react";

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
            <form onSubmit={handleSubmit} className="w-80 sm:w-[600px] flex flex-col">
                <input className="bg-indigo-950 m-2.5" type="text" placeholder="Title" name="title" onChange={(e) => { setFormData({ ...formData, "title": e.target.value }) }} value={formData.title} />
                <textarea className="h-60 scrollbar-none bg-indigo-950 m-2.5 resize-none" name="text" placeholder="Make a Note" onChange={(e) => { setFormData({ ...formData, "text": e.target.value }) }} value={formData.text}></textarea>
                <button className="m-2.5 py-2.5 bg-indigo-950 hover:bg-indigo-900" type="submit">{currentId ? "Edit Note" : "Make Note"}</button>
                <button className="m-2.5 py-2.5 bg-indigo-950 hover:bg-indigo-900" onClick={(e) => clear(e)}>Clear</button>
            </form>
        </section>
    )
}

export default Form;