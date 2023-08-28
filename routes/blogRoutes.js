import express from 'express'
import {findAll, createBlog} from '../controller/blogController.js'

const router = express.Router()


router.route('/').get(findAll).post(createBlog)


export default router