import jwt from 'jsonwebtoken'
import { config } from 'dotenv';

config()

const generateToken = (id) => {
    return jwt.sign({id}, process.env.ENCRY_KEY, {
        expiresIn: '30d'
    })
}

export default generateToken