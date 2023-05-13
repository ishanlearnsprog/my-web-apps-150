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
            <header className="absolute border-b border-indigo-900 w-full bg-indigo-950 text-neutral-50 font-mono">
                <Navbar></Navbar>
            </header>
            <main className="grid grid-cols-1 md:grid-cols-6 bg-indigo-950 h-screen">
                <section className="md:col-span-2 md:h-full flex justify-center items-center">
                    <NoteForm></NoteForm>
                </section>
                <section className="md:col-span-4">
                    {notes ? notes.map((note) => { return <Note key={note._id} note={note}></Note> }) : (<h2>No Notes</h2>)}
                </section>
            </main>
        </>
    )
}

export default Notes;