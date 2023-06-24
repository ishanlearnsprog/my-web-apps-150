import {
    useEffect,
} from "react";

import {
    Outlet,
    useNavigate
} from "react-router-dom";

import Header from "./Header/Header.jsx";

import { getUserContext } from "../../contexts/UserContext.jsx";

const Wallet = () => {
    const navigate = useNavigate();
    const { user, userDispatch } = getUserContext();

    useEffect(() => {
        if (!user) navigate("/auth");
    }, [user])

    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    )
}

export default Wallet;