import Game from '../models/Game.js';
import word from '../data/words.js';
//get random word
const getWord = async (req, res) => {
    const randomWord = await Game.aggregate([{ $sample: { size: 1 } }])
    res.status(200).json(randomWord)
}

//add word
const addWord = async (req,res) => {
    try{
        Game.insertMany(word)
        
        .then (function(err, data){
            res.json({msg: "Data added successfully"})
        })
        
    }catch(error){
        res.status(400).json({error: error.message})
    }
}
const deleteWord = async (req,res) => {
    try{
        Game.deleteMany()
        
        .then (function(err, data){
            res.json({msg: "Data deleted successfully"})
        })
        
    }catch(error){
        res.status(400).json({error: error.message})
    }
}
export const get = getWord;
export const add = addWord;
export const drop = deleteWord;