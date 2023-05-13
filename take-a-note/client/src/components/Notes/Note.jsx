import { useNotesContext } from "../../hooks/useNotesContext.jsx";
import { deleteNote } from "../../api.jsx";

const Note = ({ note }) => {
    const { dispatch } = useNotesContext();

    const handleEdit = async () => {
        dispatch({ type: "SET_EXISTING_NOTE", payload: note._id })
    }

    const handleClick = async () => {
        const res = await deleteNote(note._id);
        if (res?.status === 200) {
            dispatch({ type: "DELETE_NOTE", payload: res?.data });
        }
    }

    return (
        <div>
            <h2>{note.title}</h2>
            {note.text ? (<p>{note.text}</p>) : (<p>{"Empty Note"}</p>)}
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default Note;