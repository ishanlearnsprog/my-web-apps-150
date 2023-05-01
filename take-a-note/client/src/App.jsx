import { useState, useEffect } from "react";

import { getNotes, makeNote, delNote, editNote } from "./api";
import Notes from "./Notes/Notes";
import Form from "./Form/Form";
import Header from "./Header/Header";

function App() {

    const [notes, setNotes] = useState([])
    const [currentId, setCurrentId] = useState(0);

    async function updateNote(noteId, formData) {
        const res = await editNote(noteId, formData);
        setNotes(notes.map(note => note._id === res.data._id ? res.data : note))
    }

    async function deleteNote(noteId) {
        await delNote(noteId);
        setNotes(notes.filter(note => note._id !== noteId));
    }

    async function createNote(formData) {
        const res = await makeNote(formData);
        setNotes([...notes, res.data])
    }

    async function fetchAllNotes() {
        const res = await getNotes();
        setNotes(res.data);
    }

    useEffect(() => {
        fetchAllNotes();
    }, [])

    return (
        <>
            <header className="shadow">
                <Header></Header>
            </header>
            <main>
                <Form notes={notes} currentId={currentId} setCurrentId={setCurrentId} createNote={createNote} updateNote={updateNote}></Form>
                <Notes allNotes={notes} deleteNote={deleteNote} setCurrentId={setCurrentId}></Notes>
            </main>
        </>
    )
}

export default App;