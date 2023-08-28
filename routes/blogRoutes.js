import express from 'express'
import {findAll, createBlog, editBlog, deleteBlog} from '../controller/blogController.js'
import protect from '../middleware/userMiddleware.js'

const router = express.Router()

// @description get all blogs and create a new blog
// @route   POST /api/blog   GET /api/blog
// @access  Public
router.route('/').get(findAll).post(createBlog)


// @description delete a blog and edit a blog
// @route   EDIT /api/blog/:id   DELETE /api/blog/:id
// @access  protected
router.route('/:id').put(protect, editBlog).delete(protect, deleteBlog)


export default router