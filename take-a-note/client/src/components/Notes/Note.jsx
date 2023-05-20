import { useNotesContext } from "../../hooks/useNotesContext.jsx";
import { deleteNote } from "../../api.jsx";

const Note = ({ note }) => {
    const { dispatch } = useNotesContext();

    const handleEdit = async () => {
        dispatch({ type: "SET_EXISTING_NOTE", payload: note._id })
        dispatch({ type: "OPEN_MODAL" })
    }

    const handleClick = async () => {
        const res = await deleteNote(note._id);
        if (res?.status === 200) {
            dispatch({ type: "DELETE_NOTE", payload: res?.data });
        }
    }

    return (
        <div className="note-container">
            <div className="content-box">
                {note.title ? (<h1 className="note-title">{note.title}</h1>) : (<h1 className="empty-title unselectable">No Title</h1>)}
                {note.text ? (<p className="note-content">{note.text}</p>) : (<p className="empty-text unselectable">{"Empty Note"}</p>)}
            </div>
            <button className="button-action" onClick={handleEdit}>Edit</button>
            <button className="button-action" onClick={handleClick}>Delete</button>
        </div>
    )
}

export default Note;