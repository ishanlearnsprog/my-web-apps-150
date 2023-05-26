import { NavLink } from "react-router-dom";

import { useProductContext } from "../contexts/ProductContect.jsx"
import { useUserContext } from "../contexts/UserContext.jsx";

const Navbar = () => {
    const { user, unsetAccount } = useUserContext();
    const { changePageView } = useProductContext();
    return (
        <>
            <nav>
                <ul>
                    <li><button className="button-nav" onClick={() => changePageView("allProducts")}>All Products</button></li>
                    <li><button className="button-nav" onClick={() => changePageView("myProducts")}>{user.role === "seller" ? "Sold Products" : "Bought Products"}</button></li>
                    {user.role === "seller" && <li><button className="button-nav" onClick={() => changePageView("addProduct")}>Add Product</button></li>}
                    <li><button className="button-nav" onClick={() => changePageView("warrantyIssues")}>Warranty Requests</button></li>
                </ul>
                <div className="user-action-container">
                    <button className="button-action button-header" onClick={() => unsetAccount()}>Disconnect</button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;