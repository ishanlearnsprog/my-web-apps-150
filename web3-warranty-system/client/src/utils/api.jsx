import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000" });

export const signIn = (address) => api.post("/user/signin", { address });
export const signUp = (address, role) => api.post("/user/signup", { address, role });
