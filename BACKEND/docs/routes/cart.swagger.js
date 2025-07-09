module.exports = {
  // GET by user ID
  '/api/cart/{userId}': {
    get: {
      tags: ['Cart'],
      summary: 'Get cart items by user',
      parameters: [
        {
          name: 'userId',
          in: 'path',
          required: true,
          schema: { type: 'integer' },
        }
      ],
      responses: {
        201: { description: 'Created' }
      }
    }
  },
  // POST
  '/api/cart': {
    post: {
      tags: ['Cart'],
      summary: 'Add item to cart',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/NewCartItem' },
          }
        }
      },
      responses: {
        201: { description: 'Created' }
      }
    }
  },

  //DELETE
  '/api/cart/{id}': {
    delete: {
      tags: ['Cart'],
      summary: 'Delete an item from the cart',
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: { type: 'integer' },
          description: 'ID of the cart item to delete'
        }
      ],
      responses: {
        200: { description: 'Item deleted successfully' },
        404: { description: 'Cart item not found' },
        500: { description: 'Internal server error'}
      }
    }
  }
};
