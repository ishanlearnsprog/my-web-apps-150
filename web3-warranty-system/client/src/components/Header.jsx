import { useUserContext } from "../contexts/UserContext.jsx"
import { usePageContext } from "../contexts/PageContext.jsx";

const Header = () => {
    const { user, unsetAddress } = useUserContext();
    const { setCurrentPage } = usePageContext();
    return (
        <header>
            <h1>Header</h1>
            <nav>
                <ul>
                    {user.role === "buyer" && <li><button onClick={() => setCurrentPage("productsOnSale")}>All Products</button></li>}
                    {user.role === "seller" && <li><button onClick={() => setCurrentPage("addProduct")}>Add Product</button></li>}
                    <li><button onClick={() => setCurrentPage("myProducts")}>{user.role === "seller" ? "Listed Products" : "Bought Products"}</button></li>
                    <li><button onClick={() => setCurrentPage("warrantyList")}>Warranty Issues</button></li>
                </ul>
            </nav>
            <button onClick={() => unsetAddress()}>Disconnect</button>
        </header>
    )
}

export default Header;