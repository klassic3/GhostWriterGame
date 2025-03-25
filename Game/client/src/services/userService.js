import api from "./api";
import { REGISTER, SCORE, TOPSCORES, DELETEUSERS } from "./api";

const register = async (name) => {
    try {
        const response = await api.post(REGISTER, { name: name }); // Send an object { name: name }
        return response.data;
    } catch (error) {
        throw error;
    }
};

const update = async (id, score) => {
    try {
        const url = SCORE.replace(":id", id);
        const response = await api.put(url, { score: score }); // Send an object { score: score }
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getScore = async (id) => {
    try {
        const url = SCORE.replace(":id", id);
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getTopScores = async () => {
    try {
        const response = await api.get(TOPSCORES);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const deleteUsers = async () => {
    try {
        const response = await api.delete(DELETEUSERS);
        console.log(response);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export { register, update, getScore, getTopScores, deleteUsers };
