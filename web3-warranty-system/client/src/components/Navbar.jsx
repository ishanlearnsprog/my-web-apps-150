import { NavLink } from "react-router-dom";

import { useUserContext } from "../contexts/UserContext.jsx";
import { displayAddress } from "../utils/helpers.jsx";

const Navbar = () => {
    const { user, unsetAccount } = useUserContext();
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink>Add Product</NavLink></li>
                    <li><NavLink>Listed Products</NavLink></li>
                    <li><NavLink>Warranty Requests</NavLink></li>
                </ul>
                <div className="user-action-container">
                    <button className="button-action button-header" onClick={() => unsetAccount()}>Disconnect</button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;