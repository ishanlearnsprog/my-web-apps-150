import {
    createContext,
    useContext,
    useReducer,
    useEffect
} from "react";

const UserContext = createContext();

const userReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN": {
            return {
                user: action.payload
            }
        }
        case "LOGOUT": {
            return {
                user: null
            }
        }
        default: {
            return state;
        }
    }
}

export const UserContextProvider = ({ children }) => {
    const [state, userDispatch] = useReducer(userReducer, {
        user: null
    });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            delete user.token;
            userDispatch({ type: "LOGIN", payload: user });
        }
    }, [])

    return (
        <UserContext.Provider value={{ ...state, userDispatch }}>
            {children}
        </UserContext.Provider>
    )
}

export const getUserContext = () => {
    const context = useContext(UserContext);
    return context;
}