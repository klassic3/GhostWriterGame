import api from "./api";
import { WORD } from "./api";

const addWord = async () => {
    try {
        const response = await api.post(WORD); 
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getWord = async () => {
    try {
        const response = await api.get(WORD);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export { addWord, getWord };
