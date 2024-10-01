import mongoose from "mongoose";

const schema = mongoose.Schema

const userSchema = new schema({
    name:{
        type: String,
        required: true
    },
    score:{
        type: Number,
        default: 0
    }
})

export default mongoose.model('User', userSchema)

