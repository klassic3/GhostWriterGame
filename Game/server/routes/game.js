import express from 'express';
import {add,get} from '../controllers/gameController.js'

const router = express.Router()

router.get('/', get)

router.post('/', add)

export default router