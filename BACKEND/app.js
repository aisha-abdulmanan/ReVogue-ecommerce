const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());


// 📦 Swagger dependencies
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');

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







