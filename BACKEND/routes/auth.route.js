// Ensure to run: npm install jsonwebtoken

const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { User } = require('../models');

const SECRET_KEY = process.env.JWT_SECRET || 'secret123'; // .env preferred

// POST /auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Replace with hashed password check in production
  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Create JWT payload
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role || 'user', // assuming you have a 'role' field
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

  res.json({ token });
});

module.exports = router;
