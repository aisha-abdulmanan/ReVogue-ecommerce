const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());


// 📦 Swagger dependencies
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// 📚 Swagger setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'E-commerce API',
      version: '1.0.0',
      description: 'Documentation for E-commerce backend APIs',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ['./routes/*.js'], // 👈 Adjust if you have other route folders
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// ✅ Swagger route (this must come BEFORE your other routes!)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// 🛒 Cart route
const db = require('./models');
const cartRoutes = require('./routes/cart');
app.use('/api/cart', cartRoutes);

// 🏠 Home route
app.get('/', (req, res) => {
  res.send('Welcome to E-commerce backend!');
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});







