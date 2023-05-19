import { useNumberStoreContext } from "../contexts/useNumberStoreContext.jsx";

const ConnectAccount = () => {
    const { currentAccount, connectToAccount } = useNumberStoreContext();

    const handleConnect = () => {
        connectToAccount()
    }

    return (
        <main className="connectaccount-container">
            <button onClick={handleConnect}>Connect Account</button>
        </main>

    )
};

export default ConnectAccount;