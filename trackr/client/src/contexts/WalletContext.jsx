import {
    createContext,
    useContext,
    useReducer,
    useEffect,
} from "react";

const WalletContext = createContext();

const walletReducer = (state, action) => {
    switch (action.type) {
        case "GET_ACCOUNTS": {
            return {
                ...state,
                accounts: action.payload,
            }
        }
        case "GET_CATEGORIES": {
            return {
                ...state,
                categories: action.payload,
            }
        }
        case "GET_RECORDS": {
            return {
                ...state,
                records: action.payload,
            }
        }
        case "CALC_BALANCES": {

            return {
                ...state,
                balances: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export const WalletContextProvider = ({ children }) => {
    const [state, walletDispatch] = useReducer(walletReducer, {
        accounts: [],
        categories: [],
        records: [],
        balances: {},
    });

    const calculateBalances = () => {
        let balances = {}
        state.accounts.forEach(account => {
            balances[account._id] = +account.initialAmount;
        })
        state.records.forEach(record => {
            if (record.paymentType === "transfer") {
                balances[record.account._id] -= +record.amount;
                balances[record.recievingAccount._id] += +record.amount;
            } else if (record.paymentType === "expense") {
                balances[record.account._id] -= +record.amount;
            } else if (record.paymentType === "income") {
                balances[record.account._id] += +record.amount;
            }
        });
        walletDispatch({ type: "CALC_BALANCES", payload: balances });
    }

    useEffect(() => {
        calculateBalances();
    }, [state.accounts, state.records])

    return (
        <WalletContext.Provider value={{ ...state, walletDispatch }}>
            {children}
        </WalletContext.Provider>
    )
}

export const getWalletContext = () => {
    const context = useContext(WalletContext);
    return context;
}