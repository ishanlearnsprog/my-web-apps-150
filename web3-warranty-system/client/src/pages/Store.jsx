import Header from "../components/Header.jsx";
import ProductList from "./ProductsList.jsx";
import ProductDetails from "./ProductDetails.jsx";
import WarrantyList from "./WarrantyList.jsx";
import AddProduct from "./AddProduct.jsx";
import ErrorPage from "./ErrorPage.jsx";
import { usePageContext } from "../contexts/PageContext.jsx";

const Store = () => {
    const { currentPage } = usePageContext();

    const pageView = () => {
        if (currentPage === "productsOnSale") {
            return <ProductList></ProductList>
        } else if (currentPage === "addProduct") {
            return <AddProduct></AddProduct>
        } else if (currentPage === "myProducts") {
            return <ProductList></ProductList>
        } else if (currentPage === "warrantyList") {
            return <WarrantyList></WarrantyList>
        } else if (currentPage === "productDetails") {
            return <ProductDetails></ProductDetails>
        } else {
            return <ErrorPage></ErrorPage>
        }
    }

    return (
        <div className="layout-container">
            <Header></Header>
            {pageView()}
        </div>
    )
}

export default Store;