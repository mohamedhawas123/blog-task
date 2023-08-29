import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import Blog from '../models/blogModel.js';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({ error: 'Not authorized, no token, please login ' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.ENCRY_KEY);
        req.user = await User.findById(decoded.id).select('-password');

        if (req.user) {
            if (req.params.id) {
                const blog = await Blog.findById(req.params.id);
               
                if (blog && blog.user._id.toString() === req.user._id.toString()) {
                    return next();
                } else {
                    return res.status(403).json({ error: 'You are not allowed to do this' });
                }
            }
            return next();
        } else {
            return res.status(403).json({ error: 'Not logged in' });
        }
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
});

export default protect;
