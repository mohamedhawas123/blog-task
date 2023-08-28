import asyncHandler from 'express-async-handler'
import Blog from '../models/blogModel.js'
import User from '../models/userModel.js'


export const findAll = asyncHandler(async(req, res)=> {
    try {
        const blog = await Blog.find({})
        return res.json(blog)
    }catch(e) {
        res.status(500).json({ error: 'Something Went Wrong' });

    }
   
})


export const createBlog = asyncHandler(async(req, res)=> {
    const {title, content} = req.body
    const {userId} = req.query


    try {
        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' });
        }

        const user = await User.findOne({ _id: userId });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const newBlog = await Blog.create({
            user: user,
            title,
            content,
        });

        res.status(201).json({
            title: newBlog.title,
            content: newBlog.content,
            creator: newBlog.user.name
        });
    } catch (error) {
        res.status(500).json({ error: 'Something Went Wrong ' });
    }

    
})

