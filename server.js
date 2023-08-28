import express from 'express'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
import cors from 'cors'
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import {swaggerOptions} from './swagger-config.js'

connectDB()


const swaggerDocs = swaggerJsDoc(swaggerOptions);



const app = express()

app.use(express.json())

app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/users', userRoutes)
app.use('/api/blog', blogRoutes)



app.listen(5000, console.log('server is running'))