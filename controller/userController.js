import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utilits/token.js'


const userLogin = asyncHandler(async (req, res) => {

    const {email, password} = req.body

    if (!email || !password) {
        res.status(400).json({ error: "Please provide all required fields" })
        return
    }


    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password)) ) {
        res.json({
            _id: user._id,
            name: user.name,
            email:user.email,
            token: generateToken(user._id) 
        })
    } else {
        res.status(402).json({'error':'InValid email or Password'})
    }

})


const userRegister = asyncHandler(async (req, res) => {

    const {name, email, password} = req.body

    if (!email || !password || !name) {
        res.status(400).json({ error: "Please provide all required fields" })
        return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        res.status(400).json({ error: "Please provide a valid email address" });
        return;
    }

    const userExist = await User.findOne({email})

    if (userExist) {
        res.status(400).json({ error: "user already exists" })
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email:user.email,
           
            token: generateToken(user._id) 
        })
    }else {
        res.status(400)
        throw new Error("something went wrong")
    }

})







export {
    userLogin,
    userRegister,

}
 