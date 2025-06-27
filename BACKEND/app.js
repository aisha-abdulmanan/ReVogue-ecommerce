const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.get('/json', (req, res) => {
  res.json({message:'Backend is running!'});
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});