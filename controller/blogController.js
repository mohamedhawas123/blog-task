import asyncHandler from 'express-async-handler'
import Blog from '../models/blogModel.js'
import User from '../models/userModel.js'
import {handleServerError} from '../utilits/errorHandle.js'



export const findAll = asyncHandler(async(req, res)=> {
    try {
        const blog = await Blog.find({})
        return res.json(blog)
    }catch(e) {
        return handleServerError(res, 'Error fetching blogs.');


    }
   
})


export const createBlog = asyncHandler(async(req, res)=> {
    const {title, content} = req.body
    try {
     

        if(!title || !content) {
            return res.status(400).json({ error: 'All fields are required' });

        }

       
        const newBlog = await Blog.create({
            user: req.user,
            title,
            content,
        });

        res.status(201).json({
            title: newBlog.title,
            content: newBlog.content,
            creator: req.user.name
        });
    } catch (error) {
        console.log(error)
        return handleServerError(res, 'Error creating blog.');

    }

    
})

export const editBlog = asyncHandler(async(req, res)=> {

    const {title, content} = req.body;

    try {
        const blog  = await Blog.findById(req.params.id)
        if(!blog) {
            return res.status(404).json({'error': 'blog not found'})
        }
        if(title) blog.title = title
        if(content) blog.content = content
    
        await blog.save();
        return res.status(200).json(blog)
    }catch(e) {
        return handleServerError(res, 'Error editing blog.');

    }
    
   
})

export const deleteBlog = asyncHandler(async(req, res) => {
    try {
        const blog= await Blog.findById(req.params.id)
        if(!blog) return res.status(404).json({'error': 'blog not found'})
        await blog.deleteOne({_id: blog._id})
        return res.status(200).json({message: 'Blog has been deleted '})


    }catch(e) {
        return handleServerError(res, 'Error deleting blog.');

    }
})