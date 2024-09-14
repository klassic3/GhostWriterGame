import mongoose from "mongoose";

const schema = mongoose.Schema

const gameSchema = new schema({
    word:{
        type: String,
        required: true
    }
})

export default mongoose.model('Game', gameSchema)

