import express from 'express'
import {userLogin, userRegister} from '../controller/userController.js'

const router = express.Router();

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     description: login a user
 *     responses:
 *       201:
 *         description: used Logged
 */
router.route('/login').post(userLogin)

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     description: create a new user
 *     responses:
 *       201:
 *         description: create n new user
 */
router.route('/register').post(userRegister)

export default router