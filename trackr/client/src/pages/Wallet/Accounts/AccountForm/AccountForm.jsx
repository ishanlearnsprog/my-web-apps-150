import { useState } from "react";
import { useParams } from "react-router-dom";

import { getUserContext } from "../../../../contexts/UserContext.jsx";
import { getWalletContext } from "../../../../contexts/WalletContext.jsx";

const AccountForm = () => {
    const { accountId } = useParams();
    const { user } = getUserContext();
    console.log(user);
    const [accountData, setAccountData] = useState({
        name: "",
        type: "",
        initalAmount: 0,
        userId: user?._id,
    })

    return <h1>{user?._id}</h1>;
}

export default AccountForm;