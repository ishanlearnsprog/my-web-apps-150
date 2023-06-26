import { getWalletContext } from "../../../contexts/WalletContext.jsx";
import AccountCard from "../../../components/Dashboard/AccountCard.jsx"

const Dashboard = () => {
    const { accounts, balances } = getWalletContext();

    const dashboardAccounts = accounts.map(account => {
        return <AccountCard key={account._id} account={account} balance={balances[account._id]}></AccountCard>
    })

    return (
        <main>
            <section className="dashboard-accounts-container">
                <div className="section-content">
                    {dashboardAccounts}
                    <button className="add-account-card">Add Account</button>
                </div>
            </section>
        </main>
    )
}

export default Dashboard;