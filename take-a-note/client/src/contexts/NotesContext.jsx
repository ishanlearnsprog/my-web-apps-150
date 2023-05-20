import { createContext, useReducer } from "react";
import { SET_NOTES, CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE, SET_NEW_NOTE, SET_EXISTING_NOTE, OPEN_MODAL, CLOSE_MODAL } from "./types.jsx";

export const NotesContext = createContext();

export const NotesReducer = (state, action) => {
    switch (action.type) {
        case SET_NOTES:
            return {
                ...state,
                notes: action.payload
            }
        case CREATE_NOTE: {
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            }
        }
        case UPDATE_NOTE: {
            return {
                ...state,
                notes: state.notes.map((note) => (note._id === action.payload._id ? action.payload : note))
            }
        }
        case DELETE_NOTE: {
            return {
                ...state,
                notes: state.notes.filter((note) => (note._id !== action.payload._id))
            }
        }
        case SET_NEW_NOTE: {
            return {
                ...state,
                noteId: 0,
            }
        }
        case SET_EXISTING_NOTE: {
            return {
                ...state,
                noteId: action.payload,
            }
        }
        case OPEN_MODAL: {
            return {
                ...state,
                modal: true,
            }
        }
        case CLOSE_MODAL: {
            return {
                ...state,
                modal: false,
            }
        }
        default:
            return state;
    }
}

export const NotesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(NotesReducer, {
        notes: [],
        noteId: 0,
        modal: false,
    })

    return (
        <NotesContext.Provider value={{ ...state, dispatch }}>
            {children}
        </NotesContext.Provider>
    )
}