import { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import { getUserContext } from "../../../contexts/UserContext.jsx";

const Header = () => {
    const navigate = useNavigate();
    const { userDispatch } = getUserContext();
    const [menuState, setMenuState] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("user");
        userDispatch({ type: "LOGOUT" });
    }

    return (
        <>
            <header className="wallet-header">
                <NavLink to="/wallet" className="logo-wallet">TrackR</NavLink>
                <div className="wallet-menu">
                    <button className="wallet-menu-toggle" onClick={() => setMenuState(!menuState)}>
                        {menuState ? (<i className="fa-solid fa-x"></i>) : (<i className="fa-solid fa-bars"></i>)}
                    </button>
                    <div className={`wallet-menu-content ${menuState ? "wallet-menu-open" : ""}`}>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/wallet/dashboard" onClick={() => setMenuState(!menuState)}><i className="fa-solid fa-sliders"></i> Dashboard</NavLink>

                                </li>
                                <li>
                                    <NavLink to="/wallet/accounts" onClick={() => setMenuState(!menuState)}> <i className="fa-solid fa-wallet"></i> Accounts</NavLink>

                                </li>
                                <li>
                                    <NavLink to="/wallet/records" onClick={() => setMenuState(!menuState)}> <i className="fa-solid fa-file-lines"></i> Records</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/wallet/analytics" onClick={() => setMenuState(!menuState)}> <i className="fa-solid fa-chart-simple"></i> Analytics</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/wallet/settings" onClick={() => setMenuState(!menuState)}> <i className="fa-solid fa-gear"></i> Settings</NavLink>

                                </li>
                                <li>
                                    <button onClick={handleLogout}><i className="fa-solid fa-arrow-right-from-bracket"></i> Logout</button>
                                </li>
                            </ul>
                        </nav >
                    </div >
                </div >
            </header >
        </>
    )
}

export default Header;