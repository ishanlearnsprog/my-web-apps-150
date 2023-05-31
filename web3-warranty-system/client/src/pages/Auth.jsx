import { useUserContext } from "../contexts/UserContext.jsx"

const Auth = () => {
    const { user, setAddress, setRole } = useUserContext();
    return (
        <div className="auth-container">
            <h1>Web3 Shop</h1>
            {user.address ? (
                <div className="button-container">
                    <button className="button button-auth" onClick={() => setRole("buyer")}>Buyer</button>
                    <button className="button button-auth" onClick={() => setRole("seller")}>Seller</button>
                </div>
            ) : (
                <div className="button-container">
                    <button className="button button-auth" onClick={() => setAddress()}>Connect Account</button>
                </div>)
            }
        </div>
    )
}

export default Auth;