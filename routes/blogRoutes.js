import express from 'express'
import {findAll, createBlog, editBlog, deleteBlog} from '../controller/blogController.js'
import protect from '../middleware/userMiddleware.js'

const router = express.Router()

/**
 * @swagger
 * /api/blog:
 *   get:
 *     description: Get all blogs
 *     responses:
 *       200:
 *         description: List of all blogs
 *   post:
 *     description: Create a new blog
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Blog created
 * securityDefinitions:
 *   bearerAuth:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 */

router.route('/').get(findAll).post(protect, createBlog)

/**
 * @swagger
 * /api/blog/{id}:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     description: Edit a blog
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog edited
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     description: Delete a blog
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog deleted
 */
router.route('/:id').put(protect, editBlog).delete(protect, deleteBlog)

export default router;
