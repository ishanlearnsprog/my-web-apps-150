const Note = ({ note, deleteNote, setCurrentId }) => {
    return (
        <div className="m-5 p-5 border rounded-lg border-indigo-900 w-80 sm:w-[600px]">
            <h1 className="mb-2.5 text-xl font-medium">{note.title}</h1>
            <p className="mb-5 text font-normal whitespace-pre-wrap">{note.text}</p>
            <button className="text-neutral-300 mr-2.5 hover:underline" onClick={() => { setCurrentId(note._id); window.scrollTo({ "top": 0, "left": 0, "behavior": "smooth" }); }}>Edit</button>
            <button className="text-neutral-3w00 hover:underline" onClick={() => deleteNote(note._id)}>Delete</button>
        </div>
    )
}

export default Note;