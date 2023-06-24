import {
    useEffect,
} from "react";

import {
    Outlet,
    useNavigate
} from "react-router-dom";

import Header from "./Header/Header.jsx";

import { getUserContext } from "../../contexts/UserContext.jsx";
import { getWalletContext } from "../../contexts/WalletContext.jsx";

import {
    getAccounts,
    getCategories,
    getRecords,
} from "../../utils/api.jsx";

const Wallet = () => {
    const navigate = useNavigate();
    const { user, userDispatch } = getUserContext();
    const { accounts, categories, records, walletDispatch } = getWalletContext();

    const fetchData = async () => {
        try {
            const resAccounts = await getAccounts();
            const resCategories = await getCategories();
            const resRecords = await getRecords();
            if (resAccounts.status === 200 && resCategories.status === 200 && resRecords.status === 200) {
                walletDispatch({ type: "GET_ACCOUNTS", payload: resAccounts.data });
                walletDispatch({ type: "GET_CATEGORIES", payload: resCategories.data });
                walletDispatch({ type: "GET_RECORDS", payload: resRecords.data });
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (!user) return navigate("/auth");
        fetchData();
    }, [user])

    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    )
}

export default Wallet;