import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api";

//auth routes
export const REGISTER = "user/";
export const UPDATE = "user/:id";

//game routes
export const WORD ="game/"

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
