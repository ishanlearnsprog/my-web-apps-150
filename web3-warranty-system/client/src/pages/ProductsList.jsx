import { Fragment } from "react";

import Card from "../components/Card.jsx";
import { useUserContext } from "../contexts/UserContext.jsx"
import { usePageContext } from "../contexts/PageContext.jsx";
import { useProductContext } from "../contexts/ProductContext.jsx";

const MyProducts = () => {
    const { user } = useUserContext();
    const { currentPage } = usePageContext();
    const { onSaleProducts, myProducts } = useProductContext();

    let productList;
    if (currentPage === "productsOnSale") {
        productList = onSaleProducts.map((product) => {
            return (
                <div key={product._id}>
                    <Card product={product}></Card>
                </div>
            )
        })
    } else if (currentPage === "myProducts") {
        productList = myProducts.map((product) => {
            return (
                <Fragment key={product._id}>
                    <Card product={product}></Card>
                </Fragment>
            )
        })
    }


    return (
        <div className="products-container">
            {productList}
        </div>
    );
}

export default MyProducts;