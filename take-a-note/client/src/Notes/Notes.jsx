import Note from "./Note/Note"

const Notes = ({ allNotes, deleteNote, setCurrentId }) => {

    return (
        <section>
            {allNotes.map(note => {
                return <Note key={note._id} note={note} deleteNote={deleteNote} setCurrentId={setCurrentId}></Note>
            })}
        </section>
    )
}

export default Notes;