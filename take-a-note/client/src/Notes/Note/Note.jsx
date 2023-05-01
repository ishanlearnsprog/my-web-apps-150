const Note = ({ note, deleteNote, setCurrentId }) => {
    return (
        <div>
            <h1>{note.title}</h1>
            <p>{note.text}</p>
            <button onClick={() => setCurrentId(note._id)}>Edit</button>
            <button onClick={() => deleteNote(note._id)}>Delete</button>
        </div>
    )
}

export default Note;