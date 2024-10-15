import User from "../models/User.js";
import mongoose from "mongoose";

const addUser = async (req,res) => {
    const name = req.body
    try{
        const username = await User.create(name)
        res.json({msg: username._id})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const updateUser = async (req,res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such user'})
      }
    try{
        console.log(id)
        const user = await User.findOneAndUpdate({_id: id}, {
            ...req.body
          }
        )
        res.json({msg: "Update done"})
        
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

export const register = addUser;
export const update = updateUser;