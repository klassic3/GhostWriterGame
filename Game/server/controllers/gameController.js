import Game from '../models/Game.js';

//get random word
const getWord = async (req, res) => {
    const randomWord = await Game.aggregate([{ $sample: { size: 1 } }])
    res.status(200).json(randomWord)
}

//add word
const addWord = async (req,res) => {
    const {word} = req.body


    try{
        const game = await Game.create({word})
        res.status(200).json(game)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

export const get = getWord;
export const add = addWord;