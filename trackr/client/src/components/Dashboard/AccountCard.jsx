const AccountCard = ({ account, balance }) => {
    return (
        <div className="account-card">
            <div className="account-card-content">
                <p>{account.name}</p>
                <h1>&#8377; {balance?.toFixed(2)}</h1>
            </div>
            <button><i className="fa-solid fa-pen-to-square"></i></button>
        </div>
    )
}

export default AccountCard