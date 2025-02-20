const express = require('express');
const { add, get, empty, deleteAll } = require('../controllers/gameController.js');

const router = express.Router();

router.get('/', get);

router.post('/', add);

router.get('/empty', empty);

router.delete('/',deleteAll);

module.exports = router;
