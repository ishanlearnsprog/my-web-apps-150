import { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";

import { contractAddress, contractABI } from "../utils/index.jsx";
const { ethereum } = window;

export const NumberStoreContext = createContext();

const createEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const numberStoreContract = new ethers.Contract(contractAddress, contractABI, signer);
    return numberStoreContract;
}

export const NumberStoreContextProvider = ({ children }) => {
    const [ifWallet, setIfWallet] = useState(false);
    const [currentAccount, setCurrentAccount] = useState("");
    const [currentNumber, setCurrentNumber] = useState(0);
    const [updatesCount, setUpdatesCount] = useState(0);
    const [updatesList, setUpdatesList] = useState([]);

    const setAccountIfConnected = async () => {
        try {
            const accounts = await ethereum.request({ method: "eth_accounts" });
            setCurrentAccount(accounts[0]);
            setValues();
        } catch (error) {
            console.log(error);
        }
    }

    const connectToAccount = async () => {
        try {
            if (ethereum) {
                const accounts = await ethereum.request({ method: "eth_requestAccounts" });
                if (accounts.length) {
                    setCurrentAccount(accounts[0]);
                    setValues();
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    const setValues = async () => {
        try {
            const contract = createEthereumContract();
            const number = await contract.getNumber();
            const countUpdates = await contract.getNumOfUpdates();
            const num = Number(number._hex);
            const count = Number(countUpdates._hex);
            setCurrentNumber(num);
            setUpdatesCount(count);
        } catch (error) {
            console.log(error);
        }

    }

    const updateNumber = async (number) => {
        try {
            const contract = createEthereumContract();
            const tx = await contract.setNumber(number);
            console.log(tx);
            setCurrentNumber(number);
            setUpdatesCount(updatesCount + 1);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (ethereum) {
            setIfWallet(true);
            setAccountIfConnected();
            ethereum.on("disconnect", () => {
                setCurrentAccount("");
            })
        }
    }, [])

    return (
        <NumberStoreContext.Provider value={{ ifWallet, currentAccount, currentNumber, updatesCount, updateNumber, connectToAccount }}>
            {children}
        </NumberStoreContext.Provider>
    )
}