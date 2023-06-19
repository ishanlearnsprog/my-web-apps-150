import { NavLink } from "react-router-dom";

import { useGlobalContext } from "../../../contexts/GlobalContext.jsx";

const Header = () => {
    const { user } = useGlobalContext();
    return (
        <>
            <header>
                <h1><NavLink to="/">TrackR</NavLink></h1>
                <nav>
                    <div>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </div>
                    <div>
                        <NavLink to="/accounts">Accounts</NavLink>
                    </div>
                    <div>
                        <NavLink to="/records">Records</NavLink>
                    </div>
                    <div>
                        <NavLink to="/analytics">Analytics</NavLink>
                    </div>
                    <div>
                        <NavLink to="/settings">Settings</NavLink>
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