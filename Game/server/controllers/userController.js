const User = require("../models/User.js");
const mongoose = require("mongoose");

const register = async (req, res) => {
    const { name } = req.body;
    console.log(name);
    try {
        const newUser  = await User.create({name});
        res.json({ msg: newUser._id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const update = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such user' });
    }
    try {
        console.log(id);
        const user = await User.findOneAndUpdate({ _id: id }, {
            ...req.body
        });
        res.json({ msg: "Update done" });
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteAll = async (req, res) => {
    try {
        await User.deleteMany(); // Delete all users from the database
        res.json({ msg: 'All users deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getScore = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json({ msg: user.score });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Function to get top 3 highest scores
const getTop3Scores = async (req, res) => {
    try {
        const topScores = await User.find()
            .sort({ score: -1 }) // Sort by score in descending order
            .limit(3) // Limit to top 3 users
            .select('name score'); // Only select the name and score fields

        return res.status(200).json({
            success: true,
            data: topScores
        });
    } catch (error) {
        console.error("Error fetching top scores:", error);
        return res.status(500).json({
            success: false,
            message: "Server error while fetching top scores"
        });
    }
};
module.exports = {
    register,
    update,
    deleteAll,
    getScore,
    getTop3Scores
};
