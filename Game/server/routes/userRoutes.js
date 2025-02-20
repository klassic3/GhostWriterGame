const express = require('express');
const { register, update } = require("../controllers/userController");

const router = express.Router();

router.post('/', register);

router.patch('/:id', update);

module.exports = router;
