import { useUserContext } from "../contexts/UserContext.jsx"

const Auth = () => {
    const { user, setAddress, setRole } = useUserContext();
    return (
        <main>
            <div>
                <h1>Web3 Shop</h1>
            </div>
            {user.address ? (
                <div>
                    <button onClick={() => setRole("buyer")}>Buyer</button>
                    <button onClick={() => setRole("seller")}>Seller</button>
                </div>
            ) : (
                <div>
                    <button onClick={() => setAddress()}>Connect Account</button>
                </div>)
            }
        </main>
    )
}

export default Auth;