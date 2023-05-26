import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000" });

//serller-product
export const getListedItems = () => api.get("/product", { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).role}` } });

export const signIn = (address) => api.post("/user/signin", { address });
export const signUp = (address, role) => api.post("/user/signup", { address, role });
