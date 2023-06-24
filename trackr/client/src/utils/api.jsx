import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:8000" });

export const signUpUser = (userData) => api.post("/user/signup", { userData });
export const signInUser = (userData) => api.post("/user/signin", { userData });