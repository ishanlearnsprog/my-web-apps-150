import Header from "../components/Header.jsx";
import AllProducts from "../components/AllProducts.jsx";
import AddProduct from "../components/AddProduct.jsx";
import MyProducts from "../components/MyProducts.jsx";
import WarrantyRequests from "../components/WarrantyRequests.jsx";

import { useProductContext } from "../contexts/ProductContect.jsx";



const Seller = () => {
    const { pageView } = useProductContext();

    const view = () => {
        switch (pageView) {
            case "allProducts": {
                return <AllProducts></AllProducts>;
            }
            case "myProducts": {
                return <MyProducts></MyProducts>;
            }
            case "addProduct": {
                return <AddProduct></AddProduct>;
            }
            case "warrantyIssues": {
                return <WarrantyRequests></WarrantyRequests>;
            }
        }
    }

    return (
        <div className="layout-container">
            <Header></Header>
            <main className="page-container">
                {view()}
            </main>
        </div>
    )
}

export default Seller;