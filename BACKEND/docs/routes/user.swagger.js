module.exports = {
  '/users': {
    get: {
      summary: 'Get all users',
      tags: ['Users'],
      responses: {
        200: { description: 'List of all users' }
      },
    },
    post: {
      summary: 'Create a new user',
      tags: ['Users'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/User' },
          },
        },
      },
      responses: {
        201: { description: 'User created successfully' }
      },
    },
  },
  '/users/{id}': {
    delete: {
      summary: 'Delete a user by ID',
      tags: ['Users'],
      parameters: [
        {
          in: 'path',
          name: 'id',
          schema: { type: 'integer' },
          required: true,
          description: 'User ID',
        },
      ],
      responses: {
        200: { description: 'User deleted successfully' },
        404: { description: 'User not found' }
      },
    },
  },
};
