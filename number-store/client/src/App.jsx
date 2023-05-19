import { useState, useEffect } from "react";

import CurrentNumber from "./components/CurrentNumber.jsx";
import UpdateNumber from "./components/UpdateNumber.jsx";
import UpdatesCount from "./components/UpdatesCount.jsx";
import UpdatesList from "./components/UpdatesList.jsx";
import NoWallet from "./components/NoWallet.jsx";
import ConnectAccount from "./components/ConnectAccount.jsx";
import { useNumberStoreContext } from "./contexts/useNumberStoreContext.jsx";

const App = () => {
    const { ifWallet, currentAccount } = useNumberStoreContext();

    return (
        <>
            {(!ifWallet) ? <NoWallet></NoWallet> : (!currentAccount) ? <ConnectAccount></ConnectAccount> : (
                <main className="app-container">
                    <p className="current-account-info">{`Current Account: ${currentAccount}`}</p>
                    <CurrentNumber></CurrentNumber>
                    <UpdateNumber></UpdateNumber>
                    <UpdatesCount></UpdatesCount>
                </main>
            )}
        </>
    )
}

export default App;