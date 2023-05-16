import { useEffect } from "react";

import { useNotesContext } from "../hooks/useNotesContext.jsx";
import { fetchNotes } from "../api.jsx";

import Navbar from "../components/Notes/Navbar";
import NoteForm from "../components/Notes/NoteForm";
import Note from "../components/Notes/Note";

const Notes = () => {
    const { notes, dispatch } = useNotesContext();

    useEffect(() => {
        const setNotes = async () => {
            const res = await fetchNotes();
            if (res.status === 200) {
                dispatch({ type: "SET_NOTES", payload: res.data });
            }
        }
        setNotes();
    }, [])

    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <section className="form-container">
                    <NoteForm></NoteForm>
                </section>
                <section>
                    {notes.length !== 0 ? notes.map((note) => { return <Note key={note._id} note={note}></Note> }) : <h2>There are no notes</h2>}
                </section>
            </main>
        </>
    )
}

export default Notes;