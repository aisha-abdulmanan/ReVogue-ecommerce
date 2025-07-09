const express = require('express');
const app = express();
app.use(express.json());


// Swagger dependencies
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');

// ✅ Swagger route (this must come BEFORE your other routes!)
// Loads swagger.js and mounts Swagger UI via swagger-ui-express
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));  


const db = require('./models');

// Routes dependencies
const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user');
const cartRoutes = require('./routes/cart');

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/api/cart', cartRoutes);


// 🏠 Home route
app.get('/', (req, res) => {
  res.send('Welcome to E-commerce backend!');
});


// 🚀 Start server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});







