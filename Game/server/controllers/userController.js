import User from "../models/User.js";

const addUser = async (req,res) => {
    const name = req.body
    try{
        const username = await User.create(name)
        res.json({msg: "User added successfully"})
        
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

export const register = addUser;