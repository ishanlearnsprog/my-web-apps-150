import {
    createContext,
    useContext,
    useState,
} from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    const [user, setUser] = useState({
        firstName: "Ishan",
        lastName: "Rajendra",
        email: "sishan2811@gmail.com",
    })

    const [accounts, setAccounts] = useState([
        {
            _id: "1",
            name: "Cash",
            type: "Cash",
            amount: "0",
            user: "u1",
        },
        {
            _id: "2",
            name: "SBI",
            type: "Saving",
            amount: "0",
            user: "u1",
        },
    ])

    return (
        <GlobalContext.Provider value={
            {
                user,
                accounts
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    return context;
}