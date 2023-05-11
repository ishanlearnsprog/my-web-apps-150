import { createContext, useReducer, useEffect } from "react";

import { LOGIN, LOGOUT } from "./types.jsx";

export const UsersContext = createContext();

export const UsersReducer = (state, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                user: action.payload,
            }
        }
        case LOGOUT: {
            return {
                user: null,
            }
        }
        default: {
            return state
        }
    }
}

export const UsersContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UsersReducer, {
        user: null,
    })

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            dispatch({ type: LOGIN, payload: user })
        }
    }, [])

    return (
        <UsersContext.Provider value={{ ...state, dispatch }}>
            {children}
        </UsersContext.Provider>
    )
}