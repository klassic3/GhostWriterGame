const Game = require('../models/Game.js');
const words = require('../data/words.js');
const crypto = require('crypto');


let recentWordIds = [];

// get random word
const getWord = async (req, res) => {
    try {
        const count = await Game.countDocuments();
        const randomIndex = await crypto.randomInt(0, count);
        const randomWord = await Game.findOne().skip(randomIndex);


        if (recentWordIds.includes(randomWord._id.toString())) {
            return getWord(req, res); 
        }

        recentWordIds.push(randomWord._id.toString());
        if (recentWordIds.length > 10) recentWordIds.shift();

        res.status(200).json(randomWord);
    } catch (error) {
        res.status(500).json({ message: "Error fetching random word", error });
    }
}

    //check if model empty
    const isModelEmpty = async () => {
        try {
            // Check if the 'Game' collection is empty
            const count = await Game.countDocuments();
            return count === 0; // Return true if the collection is empty, false otherwise
        } catch (error) {
            throw new Error('Error checking model status: ' + error.message);
        }
    };

    // add word
    const addWord = async (req, res) => {
        try {
            const isEmpty = await isModelEmpty();

            if (!isEmpty) {
                return res.json({ msg: "Data already exists in the collection" });
            }

            // Insert the words into the Game collection
            await Game.insertMany(words);
            res.json({ msg: "Words added successfully" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    // delete all words
    const deleteAllWords = async (req, res) => {
        try {
            // Delete all documents in the 'Game' collection
            await Game.deleteMany({});
            res.json({ msg: "All words deleted successfully" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    module.exports = {
        get: getWord,
        empty: isModelEmpty,
        add: addWord,
        deleteAll: deleteAllWords  // Export the new delete function
    };
