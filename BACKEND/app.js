const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const db = require('./models');
const cartRoutes = require('./routes/cart');

app.use(express.json());
app.use('/api/cart', cartRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to E-commerce backend!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});




