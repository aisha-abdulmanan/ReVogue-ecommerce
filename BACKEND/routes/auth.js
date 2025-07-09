const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

// GET /users/profile - protected route
router.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'This is your profile.', user: req.user });
});

// DELETE /users/:id - admin-only route
router.delete('/:id', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  // deletion logic
  res.json({ message: `User ${req.params.id} deleted by admin.` });
});

module.exports = router;
