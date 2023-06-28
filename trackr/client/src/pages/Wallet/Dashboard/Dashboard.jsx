import { useNavigate } from "react-router-dom";

import { getWalletContext } from "../../../contexts/WalletContext.jsx";
import AccountCard from "../../../components/Dashboard/AccountCard.jsx"
import RecordsCard from "../../../components/Dashboard/RecordsCard/RecordCard.jsx"

const Dashboard = () => {
    const navigate = useNavigate();
    const { accounts, balances } = getWalletContext();

    let totalBalance = 0;

    for (let balanceId in balances) {
        totalBalance += +balances[balanceId];
    }

    const dashboardAccounts = accounts.map(account => {
        return <AccountCard key={account._id} account={account} balance={balances[account._id]}></AccountCard>
    })

    return (
        <main className="dashboard-container">
            <section className="dashboard-accounts-container">
                <div className="section-content">
                    {/* <div className="account-card">
                        <div className="account-card-content">
                            <p>Total Balance</p>
                            <h1>&#8377; {totalBalance?.toFixed(2)}</h1>
                        </div>
                    </div> */}
                    {dashboardAccounts}
                    <button className="add-account-card" onClick={() => navigate("/wallet/accounts/0")}>Add Account</button>
                </div>
            </section>
            <section className="dashboard-cards-container">
                {/* <div className="dashboard-period-container">
                    <h1>Time</h1>
                </div> */}
                <RecordsCard></RecordsCard>
            </section>
        </main>
    )
}

export default Dashboard;