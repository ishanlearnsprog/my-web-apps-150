import Note from "./Note/Note"

const Notes = ({ allNotes, deleteNote, setCurrentId }) => {

    return (
        <section>
            {allNotes.length ? allNotes.map(note => {
                return <Note key={note._id} note={note} deleteNote={deleteNote} setCurrentId={setCurrentId}></Note>
            }) : <h1 className="m-[50px] text-xl font-normal">No Notes</h1>}
        </section>
    )
}

export default Notes;