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

module.exports = {
    register,
    update
};
