import { useUserContext } from "../contexts/UserContext.jsx"
import { usePageContext } from "../contexts/PageContext.jsx";

const Header = () => {
    const { user, unsetAddress } = useUserContext();
    const { setCurrentPage } = usePageContext();
    return (
        <header>
            <div>
                <h1>Web3 Shop</h1>
            </div>
            <nav>
                <ul>
                    {user.role === "buyer" && <li><button className="button button-link" onClick={() => setCurrentPage("productsOnSale")}>All Products</button></li>}
                    {user.role === "seller" && <li><button className="button button-link" onClick={() => setCurrentPage("addProduct")}>Add Product</button></li>}
                    <li><button className="button button-link" onClick={() => setCurrentPage("myProducts")}>{user.role === "seller" ? "Listed Products" : "Bought Products"}</button></li>
                    <li><button className="button button-link" onClick={() => setCurrentPage("warrantyList")}>Warranty Issues</button></li>
                </ul>
                <button className="button button-disconnect" onClick={() => unsetAddress()}>Disconnect</button>
            </nav>
        </header>
    )
}

export default Header;