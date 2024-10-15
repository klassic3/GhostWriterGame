import express from 'express';
import { register, update } from '../controllers/userController.js'


const router = express.Router()

router.post('/', register)

router.patch('/:id', update)


export default router