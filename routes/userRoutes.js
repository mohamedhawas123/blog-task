import express from 'express'
import {userLogin, userRegister} from '../controller/userController.js'

const router = express.Router();

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     description: Login a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email of the user.
 *               password:
 *                 type: string
 *                 description: The user's password.
 *             required:
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: User Logged In
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.route('/login').post(userLogin);

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     description: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the user.
 *               email:
 *                 type: string
 *                 description: The email of the user.
 *               password:
 *                 type: string
 *                 description: The user's password.
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: New user created
 *       400:
 *         description: Bad request
 *       409:
 *         description: Conflict (e.g., email already exists)
 */
router.route('/register').post(userRegister);


export default router