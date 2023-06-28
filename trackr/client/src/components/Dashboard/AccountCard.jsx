import { useNavigate } from "react-router-dom";
import { formatAmountIndia } from "../../utils/formatAmount.jsx";

const AccountCard = ({ account, balance }) => {
    const navigate = useNavigate();
    return (
        <div className="account-card">
            <div className="account-card-content">
                <p>{account.name}</p>
                <h1>&#8377;{balance !== undefined ? formatAmountIndia(balance?.toFixed(2)) : ""}</h1>
            </div>
            <button onClick={() => navigate(`/wallet/accounts/${account._id}`)}><i className="fa-solid fa-pen-to-square"></i></button>
        </div>
    )
}

export default AccountCard