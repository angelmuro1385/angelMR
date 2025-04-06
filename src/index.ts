import { Request, Response } from 'express';

import productsRoutes from './routes/products';
app.use(productsRoutes);


const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Club Amarrako API',
      version: '1.0.0',
      description: 'Documentación de la API de Club Amarrako'
    },
    servers: [
      {
        url: 'https://app.clubamarrako.es/docs#/',  
      },
    ],
  },  
  apis: ['./routes/*.js'], 
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rutas de ejemplo
app.get('/', (req: Request, res: Response) => {
  res.send('API Club Amarrako funcionando.');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
const eventosRoutes = require('./routes/eventos');
app.use('/', eventosRoutes);