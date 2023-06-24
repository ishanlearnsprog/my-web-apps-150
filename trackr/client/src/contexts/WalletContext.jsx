import {
    createContext,
    useContext,
    useReducer,
    useEffect,
    Children
} from "react";

const WalletContext = createContext();

const walletReducer = (state, action) => {
    switch (action.type) {
        case "GET_ACCOUNTS": {
            return {
                ...state,
                accounts: action.payload,
            }
        }
        case "GET_CATEGORIES": {
            return {
                ...state,
                categories: action.payload,
            }
        }
        case "GET_RECORDS": {
            return {
                ...state,
                records: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}

export const WalletContextProvider = ({ children }) => {
    const [state, walletDispatch] = useReducer(walletReducer, {
        accounts: [],
        categories: [],
        records: [],
    })
    return (
        <WalletContext.Provider value={{ ...state, walletDispatch }}>
            {children}
        </WalletContext.Provider>
    )
}

export const getWalletContext = () => {
    const context = useContext(WalletContext);
    return context;
}