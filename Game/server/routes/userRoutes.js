const express = require('express');
const { register, update, deleteAll, getTop3Scores, getScore, deleteUsers} = require("../controllers/userController");

const router = express.Router();

router.post('/', register);

router.put('/id/:id', update);

router.delete('/', deleteAll);

router.get('/id/:id', getScore);

router.get('/top', getTop3Scores);

router.get('/delete', deleteUsers);

module.exports = router;
