const express = require('express');
const router = express.Router();
const { CartItem } = require('../models');

// Get all cart items for a user (e.g. userId = 1)
router.get('/:userId', async (req, res) => {
  try {
    const cartItems = await CartItem.findAll({
      where: { userId: req.params.userId }
    });
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add an item
router.post('/', async (req, res) => {
  try {
    const newItem = await CartItem.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete item
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await CartItem.destroy({
      where: { id: req.params.id }
    });

    if (deleted === 0) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;