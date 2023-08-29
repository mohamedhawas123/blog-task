import express from 'express'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
import cors from 'cors'
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import {swaggerOptions} from './utilits/swagger-config.js'

connectDB()

const port = process.env.PORT || 3000;

const swaggerDocs = swaggerJsDoc(swaggerOptions);



const app = express()

app.use(express.json())

app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/users', userRoutes)
app.use('/api/blog', blogRoutes)



app.listen(port, "0.0.0.0", function () {
    console.log('server is running')
  });