import {
    useState,
    useEffect,
    useContext,
    createContext,
} from "react";

import { useUserContext } from "./UserContext.jsx";

const PageContext = createContext();

export const PageContextProvider = ({ children }) => {
    const { user } = useUserContext();
    const [currentPage, setCurrentPage] = useState("");

    useEffect(() => {
        if (user.role === "seller") {
            setCurrentPage("myProducts")
        } else if (user.role === "buyer") {
            setCurrentPage("productsOnSale");
        }
    }, [user.role])

    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
            {children}
        </PageContext.Provider>
    )
}

export const usePageContext = () => {
    const context = useContext(PageContext);
    return context;
}