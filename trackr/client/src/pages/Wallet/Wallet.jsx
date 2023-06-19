import {
    Outlet
} from "react-router-dom";

import Header from "./Header/Header.jsx";

const Wallet = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    )
}

export default Wallet;