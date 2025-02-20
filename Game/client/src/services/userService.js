import api from "./api";
import { REGISTER } from "./api";

const register = async (name) => {
    console.log(name);
    try {
        const response = await api.post(REGISTER, { name: name });  // Send an object { name: name }
        return response.data;
    } catch (error) {
        throw error;
    }
};


export { register };
