import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:8000" });

const config = {
    headers: {
        authorization: `Bearer ${(JSON.parse(localStorage.getItem("user")))?.token}`
    }
}

export const signUpUser = (userData) => api.post("/user/signup", { userData });
export const signInUser = (userData) => api.post("/user/signin", { userData });

export const getAccounts = () => api.get("/account", config);

export const getCategories = () => api.get("/category", config);

export const getRecords = () => api.get("/record", config);