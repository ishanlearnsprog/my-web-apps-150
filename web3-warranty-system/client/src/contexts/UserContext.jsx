import {
    useState,
    useEffect,
    useContext,
    createContext,
} from "react";

import {
    signIn,
    signUp,
} from "../utils/api.jsx";

import { ethers } from "ethers";

const { ethereum } = window;
const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({ address: "", role: "" });
    const [userLoading, setUserLoading] = useState(false);
    const [userError, setUserError] = useState("");

    const setAccount = async () => {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        if (accounts.length === 0) {
            setUserError("There is an issue with your Metamask Wallet");
        } else {
            user.address = accounts[0];
            try {
                setUserLoading(true);
                const { data } = await signIn(user.address);
                if (data) {
                    user.role = data.role;
                }
                localStorage.setItem("user", JSON.stringify(user));
                setUserLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
    }

    const setRole = async (role) => {
        try {
            setUserLoading(true);
            const { data } = await signUp(user.address, role);
            if (data) {
                user.address = data.address;
                user.role = data.role;
            }
            setUserLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const unsetAccount = () => {
        setUser({ address: "", role: "" });
        localStorage.removeItem("user");
    }

    useEffect(() => {
        if (!ethereum) {
            setUserError("Please Install Metamask")
        } else {
            const savedUser = JSON.parse(localStorage.getItem("user"));
            if (savedUser) {
                setUser({ ...savedUser });
            }
        }
    }, [])

    return (
        <UserContext.Provider value={{ user, userLoading, userError, setAccount, setRole, unsetAccount }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
}