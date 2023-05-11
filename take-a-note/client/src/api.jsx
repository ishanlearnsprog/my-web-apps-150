import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000" })

export const fetchNotes = () => api.get("/notes", { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}` } });
export const createNote = (data) => api.post("/notes", data, { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}` } });
export const updateNote = (noteId, data) => api.put(`/notes/${noteId}`, data, { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}` } });
export const deleteNote = (noteId) => api.delete(`/notes/${noteId}`, { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}` } });

export const signInUser = (data) => api.post("/user/signin", data);
export const signUpUser = (data) => api.post("/user/signup", data);