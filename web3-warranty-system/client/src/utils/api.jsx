import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000" });

export const getProductsOnSale = () => api.get("/product");

export const getBoughtProducts = () => api.get("/product/bought", { headers: { Authorization: `Bearer ${localStorage.getItem("user")}` } });
export const buyProduct = (productId) => api.patch("/product/buy", { productId }, { headers: { Authorization: `Bearer ${localStorage.getItem("user")}` } });
export const claimWarranty = (productId, data) => api.patch("/product/claimwarranty", { productId, data }, { headers: { Authorization: `Bearer ${localStorage.getItem("user")}` } });

export const getListedProducts = () => api.get("/product/listed", { headers: { Authorization: `Bearer ${localStorage.getItem("user")}` } });
export const addProduct = (data) => api.post("/product/add", { data }, { headers: { Authorization: `Bearer ${localStorage.getItem("user")}` } });
export const activateWarranty = (productId, warrantyTokenId) => api.patch("/product/activatewarranty", { productId, warrantyTokenId }, { headers: { Authorization: `Bearer ${localStorage.getItem("user")}` } });

export const signInUser = (address) => api.post("/user/signin", { address });
export const signUpUser = (address, role) => api.post("/user/signup", { address, role });
