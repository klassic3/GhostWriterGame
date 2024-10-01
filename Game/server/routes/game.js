import express from 'express';
import {add,drop,get} from '../controllers/gameController.js'

const router = express.Router()

router.get('/', get)

router.post('/', add)

router.delete('/', drop)

export default router