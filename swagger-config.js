export const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
            description: 'Blog API documentation',
        },
        servers: [
            {
                url: 'http://localhost:5000', 
            },
        ],
    },
    apis: ['./routes/*.js'],
};
