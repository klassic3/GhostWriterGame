const mongoose = require('mongoose');

const schema = mongoose.Schema;

const gameSchema = new schema({
    word: {
        type: String,
        required: true,
        unique: true,  // Ensure words are unique
    }
});

module.exports = mongoose.model('Game', gameSchema);
