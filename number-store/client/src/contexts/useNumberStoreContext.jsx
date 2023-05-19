import { useContext } from "react";

import { NumberStoreContext } from "./NumberStoreContext.jsx";

export const useNumberStoreContext = () => {
    const context = useContext(NumberStoreContext);
    return context;
}