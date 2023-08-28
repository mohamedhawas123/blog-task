import jwt from 'jsonwebtoken'


const generateToken = (id) => {
    return jwt.sign({id}, '123456', {
        expiresIn: '30d'
    })
}

export default generateToken