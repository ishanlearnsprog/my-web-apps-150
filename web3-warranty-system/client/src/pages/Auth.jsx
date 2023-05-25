import { useUserContext } from "../contexts/UserContext.jsx";

const Auth = () => {
    const { user, userError, setAccount, setRole } = useUserContext();

    return (
        <main className="auth-page">
            <h1 className="landing-title">Web3 Shop</h1>
            {userError ? (<h1 className="text-center">{userError}</h1>) :
                !user.address ? (
                    <div className="button-container">
                        <button className="button-action button-full-width" onClick={() => setAccount()}>Connect Account</button>
                    </div>
                ) :
                    !user.role ? (
                        <div className="button-container">
                            <button className="button-action button-full-width" onClick={() => setRole("buyer")}>Purchase Products</button>
                            <button className="button-action button-full-width" onClick={() => setRole("seller")}>Sell Products</button>
                        </div>
                    ) : <h1>Welcome...</h1>}
        </main>
    )
}

export default Auth;