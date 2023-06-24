import { NavLink } from "react-router-dom";

import { getUserContext } from "../../../contexts/UserContext.jsx";

const Header = () => {
    const { userDispatch } = getUserContext();

    const handleLogout = () => {
        localStorage.removeItem("user");
        userDispatch({ type: "LOGOUT" });
    }

    return (
        <>
            <header>
                <h1><NavLink to="/wallet">TrackR</NavLink></h1>
                <nav>
                    <div>
                        <NavLink to="/wallet/dashboard">Dashboard</NavLink>
                    </div>
                    <div>
                        <NavLink to="/wallet/accounts">Accounts</NavLink>
                    </div>
                    <div>
                        <NavLink to="/wallet/records">Records</NavLink>
                    </div>
                    <div>
                        <NavLink to="/wallet/analytics">Analytics</NavLink>
                    </div>
                    <div>
                        <NavLink to="/wallet/settings">Settings</NavLink>
                    </div>
                </nav>
                <button onClick={handleLogout}>Logout</button>
            </header>
        </>
    )
}

export default Header;