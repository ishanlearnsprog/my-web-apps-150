import {
    useState,
} from "react";

import { usePageContext } from "../contexts/PageContext.jsx"
import { useProductContext } from "../contexts/ProductContext.jsx";

const AddProduct = () => {
    const { setCurrentPage } = usePageContext();
    const { addProductToStore } = useProductContext();
    const [formData, setFormData] = useState({
        "name": "",
        "description": "",
        "price": 0,
        "warrantyOffered": false,
        "warrantyPeriodInYears": 0,
        "warrantyPeriodInMonths": 0
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addProductToStore(formData);
        setFormData({
            "name": "",
            "description": "",
            "price": 0,
            "warrantyOffered": false,
            "warrantyPeriodInYears": 0,
            "warrantyPeriodInMonths": 0
        });
        setCurrentPage("myProducts");
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Description"
                        name="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                </div>

                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        placeholder="Price"
                        name="price"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
                </div>

                {formData.warrantyOffered &&
                    <div>
                        <label>Warranty Period in Years</label>
                        <input
                            type="number"
                            placeholder="Warranty Period (Years)"
                            name="warrantyPeriodInYears"
                            value={formData.warrantyPeriodInYears}
                            onChange={(e) => setFormData({ ...formData, warrantyPeriodInYears: e.target.value })} />
                    </div>
                }

                {formData.warrantyOffered &&
                    <div>
                        <label>Warranty Period in Months</label>
                        <input
                            type="number"
                            placeholder="Warranty Period (Months)"
                            name="warrantyPeriodInMonths"
                            value={formData.warrantyPeriodInMonths}
                            onChange={(e) => setFormData({ ...formData, warrantyPeriodInMonths: e.target.value })} />
                    </div>
                }

                <button type="submit">Add Product</button>
            </form>
            <button onClick={(e) => {
                setFormData({ ...formData, warrantyOffered: !formData.warrantyOffered });
            }}>
                {formData.warrantyOffered === true ? "Remove Warranty" : "Add Warranty"}
            </button>
        </div>
    )
}

export default AddProduct