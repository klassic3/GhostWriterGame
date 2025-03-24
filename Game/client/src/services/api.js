import axios from "axios";

const API_URL = "https://mern-game-3u43.onrender.com/api";

//auth routes
export const REGISTER = "user/";
export const SCORE = "user/id/:id";
export const TOPSCORES = "user/top";

//game routes
export const WORD ="game/"

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
