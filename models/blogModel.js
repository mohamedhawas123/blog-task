import mongoose from 'mongoose'


const blogSchema = mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'User'
    },
    title:{
        required: true,
        type: 'string',
    },
    content:{
        required:true,
        type: 'string',
    }
})


const Blog = mongoose.model('Blog', blogSchema)

export default Blog