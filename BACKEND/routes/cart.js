const express = require('express');
const router = express.Router();
const { CartItem } = require('../models');


/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Cart operations (get, add, delete)
 */

// Get all cart items for a user (e.g. userId = 1)
/**
 * @swagger
 * /api/cart/{userId}:
 *   get:
 *     summary: Get all cart items for a user
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: List of cart items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   userId:
 *                     type: integer
 *                   productId:
 *                     type: integer
 *                   quantity:
 *                     type: integer
 */
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
/**
 * @swagger
 * /api/cart:
 *   post:
 *     summary: Add an item to the cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - productId
 *               - quantity
 *             properties:
 *               userId:
 *                 type: integer
 *               productId:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Item added successfully
 */
router.post('/', async (req, res) => {
  try {
    const newItem = await CartItem.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete item
/**
 * @swagger
 * /api/cart/{id}:
 *   delete:
 *     summary: Delete an item from the cart
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the cart item to delete
 *     responses:
 *       200:
 *         description: Item deleted successfully
 */
router.delete('/:id', async (req, res) => {
  try {
    await CartItem.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;