import {
    useState,
    useEffect,
    useContext,
    createContext,
} from "react"

import { useUserContext } from "./UserContext.jsx";

const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
    const { user } = useUserContext();
    const [pageView, setPageView] = useState("allProducts");

    const changePageView = (view) => {
        switch (view) {
            case "allProducts": {
                return setPageView("allProducts");
            }
            case "myProducts": {
                return setPageView("myProducts");
            }
            case "addProduct": {
                return setPageView("addProduct");
            }
            case "warrantyIssues": {
                return setPageView("warrantyIssues");
            }
        }
    }

    return (
        <ProductContext.Provider value={{ pageView, changePageView }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext = () => {
    const context = useContext(ProductContext);
    return context;
}