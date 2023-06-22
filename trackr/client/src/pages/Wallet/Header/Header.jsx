import { NavLink } from "react-router-dom";

import { useGlobalContext } from "../../../contexts/GlobalContext.jsx";

const Header = () => {
    const { user } = useGlobalContext();
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
                <div>
                    <h1>{user?.firstName} {user?.lastName}</h1>
                </div>
            </header>
        </>
    )
}

export default Header;