import { createContext, useReducer, useEffect } from "react";
import jwt_decode from "jwt-decode";

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
    const [state, dispatchUser] = useReducer(UsersReducer, {
        user: null,
    })

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            const { exp } = jwt_decode(JSON.parse(user).token);
            let currentDate = new Date();
            if (exp * 1000 <= currentDate.getTime()) {
                localStorage.removeItem("user");

            } else {
                dispatchUser({ type: "LOGIN", payload: user });
            }
        }
    }, [])

    return (
        <UsersContext.Provider value={{ ...state, dispatchUser }}>
            {children}
        </UsersContext.Provider>
    )
}