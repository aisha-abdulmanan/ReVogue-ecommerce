module.exports = {
  CartItem: {
    type: 'object',
    properties: {
      id: { type: 'integer' },
      userId: { type: 'integer' },
      productId: { type: 'integer' },
      quantity: { type: 'integer' }
    }
  },
  NewCartItem: {
    type: 'object',
    required: ['userId', 'productId', 'quantity'],
    properties: {
      userId: { type: 'integer' },
      productId: { type: 'integer' },
      quantity: { type: 'integer' }
    }
  }
};