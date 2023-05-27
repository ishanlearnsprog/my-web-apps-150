import { useUserContext } from "../contexts/UserContext.jsx";
import { useProductContext } from "../contexts/ProductContext.jsx";

const ProductDetails = () => {
    const { user } = useUserContext();
    const { currentProduct, purchaseProduct } = useProductContext();
    return (
        <main>
            <h1>Name: {currentProduct.name}</h1>
            <h2>Descrpition: {currentProduct.description}</h2>
            <p>&#8377;{currentProduct.price}</p>
            {currentProduct.warrantyOffered && <p>Warranty: {currentProduct.warrantyPeriodInYears} years and {currentProduct.warrantyPeriodInMonths} months </p>}
            {user.role === "seller" && currentProduct.sold === true && <h3>Sold</h3>}
            {currentProduct.sold === false &&
                <button onClick={() => purchaseProduct(currentProduct._id)}>Buy</button>}
            {currentProduct.sold &&
                currentProduct.warrantyOffered === true &&
                currentProduct.warrantyActive === false &&
                <button>Activate Warranty</button>}
        </main>
    )
}

export default ProductDetails;