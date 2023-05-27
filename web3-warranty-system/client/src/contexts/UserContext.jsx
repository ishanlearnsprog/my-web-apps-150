import {
    useState,
    useEffect,
    useContext,
    createContext,
} from "react";

import {
    signInUser,
    signUpUser,
} from "../utils/api.jsx";

const UserContext = createContext();
const { ethereum } = window;

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({ address: "", role: "" });

    const setAddress = async () => {
        try {
            const accounts = await ethereum.request({ "method": "eth_requestAccounts" });
            const address = accounts[0];
            if (!address) throw Error("THERE WAS SOME ISSUE WITH YOUR METAMASK WALLET");
            setUser({ ...user, address })
            const { data } = await signInUser(address);
            if (data) {
                const role = data.role;
                setUser({ address, role });
                localStorage.setItem("user", JSON.stringify({ address, role }));
            }
        } catch (error) {
            console.log(error)
        }
    }

    const setRole = async (role) => {
        try {
            const { data } = await signUpUser(user.address, role);
            if (data) {
                const role = data.role;
                setUser({ ...user, role });
                localStorage.setItem("user", JSON.stringify({ ...user, role }));
            }
        } catch (error) {
            console.log(error);
        }
    }

    const setConnectedAccount = async () => {
        try {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            if (storedUser) {
                setUser({ ...storedUser });
            } else {
                unsetAddress();
            }
        } catch (error) {
            console.log(error)
        }
    }

    const unsetAddress = () => {
        setUser({ address: "", role: "" });
        localStorage.removeItem("user");
    }

    useEffect(() => {
        try {
            if (!ethereum) throw Error("PLEASE INSTALL METAMASK");
            setConnectedAccount();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setAddress, setRole, unsetAddress }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
}