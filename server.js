import express from 'express'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import blogRoutes from './routes/blogRoutes.js'

import cors from 'cors'

connectDB()

const app = express()

app.use(express.json())

app.use(cors())


app.use('/api/users', userRoutes)
app.use('/api/blog', blogRoutes)



app.listen(5000, console.log('server is running'))