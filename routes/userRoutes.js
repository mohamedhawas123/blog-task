import express from 'express'
import {userLogin, userRegister} from '../controller/userController.js'

const router = express.Router();

// @description login a user
// @route   POST /api/users/login
// @access  Public
router.route('/login').post(userLogin)

// @description register new user
// @route   POST /api/users/register
// @access  Public
router.route('/register').post(userRegister)

export default router