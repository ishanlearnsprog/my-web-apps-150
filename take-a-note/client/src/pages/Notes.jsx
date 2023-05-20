import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { useNotesContext } from "../hooks/useNotesContext.jsx";
import { useUsersContext } from "../hooks/useUsersContext.jsx";
import { fetchNotes } from "../api.jsx";

import Navbar from "../components/Notes/Navbar";
import NoteForm from "../components/Notes/NoteForm";
import Note from "../components/Notes/Note";

const Notes = () => {
    const { user, dispatchUser } = useUsersContext();
    const { notes, modal, dispatch } = useNotesContext();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const { exp } = jwt_decode(JSON.parse(user).token);
        let currentDate = new Date();
        const activePeriod = exp * 1000 - currentDate;
        if (activePeriod > 0) {
            setTimeout(() => {
                localStorage.removeItem("user");
                dispatchUser({ type: "LOGOUT" });
            }, activePeriod);
        }
    }, [])

    useEffect(() => {
        const setNotes = async () => {
            setLoading(true);
            const res = await fetchNotes();
            if (res.status === 200) {
                dispatch({ type: "SET_NOTES", payload: res.data });
            }
            setLoading(false);
        }
        setNotes();
    }, [])

    const toggleModal = () => {
        dispatch({ type: "OPEN_MODAL" })
    }

    const modalAdjustClass = modal ? "layout-flex-notes stop-overflow" : "layout-flex-notes";

    return (
        <>
            <div className={modalAdjustClass}>
                <header className="top">
                    <Navbar></Navbar>
                </header>
                <main className="bottom">
                    <div className="make-note-container">
                        <button className="button-form" onClick={toggleModal}>Make Note</button>
                    </div>
                    {modal ? (
                        <section className="notes-form-container">
                            <NoteForm></NoteForm>
                        </section>
                    ) : null}
                    <section className="all-notes-container">
                        {loading ? <h1>Loading...</h1> :
                            notes.length !== 0 ? notes.map((note) => { return <Note key={note._id} note={note}></Note> }) : <h1 className="notes-none unselectable">There are no notes</h1>}
                    </section>
                </main>
            </div>
        </>
    )
}

export default Notes;