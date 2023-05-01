import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getNotes = () => API.get("/notes");
export const getNote = (id) => API.get(`/notes/${id}`);
export const makeNote = (note) => API.post("/notes", note);
export const delNote = (id) => API.delete(`/notes/${id}`);
export const editNote = (id, data) => API.put(`/notes/${id}`, data);