import mongoose from 'mongoose'
import becrypt from 'bcryptjs'



const userSchema = mongoose.Schema({
    name:{
        type: 'string',
        required: true,
    },
    email:{
        type: 'string',
        required:true,

    },
    password: {
        type: 'string',
        required: true
    }
}, {
    timestamps: true
})

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await becrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function(next) {
    if(!this.isModified()) {
        next()
    }
    const salt = await becrypt.genSalt(10)
    this.password = await becrypt.hash(this.password, salt)
})

const User = mongoose.model('User',userSchema)

export default User