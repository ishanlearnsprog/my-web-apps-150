import { useUserContext } from "../contexts/UserContext.jsx"
import { usePageContext } from "../contexts/PageContext.jsx";
import { useProductContext } from "../contexts/ProductContext.jsx";

const Card = ({ product }) => {
    const { user } = useUserContext();
    const { selectProduct } = useProductContext();
    const { currentPage } = usePageContext();

    const handleSelect = () => {
        selectProduct(product._id, currentPage);
    }

    return (
        <div onClick={() => handleSelect()}>
            <h1>Name: {product.name}</h1>
            <p>&#8377;{product.price}</p>
            {user.role === "seller" && product.sold === true && <h3>Sold</h3>}
            {user.role === "seller"
                && product.sold === true
                && product.warrantyOffered === true
                && product.warrantyActive === false
                && <h3>Unactive Warranty</h3>}
        </div>
    )
}

export default Card;