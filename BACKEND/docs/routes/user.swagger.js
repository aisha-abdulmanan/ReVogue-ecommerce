module.exports = {
  '/users/profile': {
    get: {
      summary: 'Get your profile',
      tags: ['Users'],
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          description: 'User profile returned',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/User' },
            },
          },
        },
        401: { description: 'Unauthorized' },
        403: { description: 'Forbidden' },
      },
    },
  },
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
      summary: 'Delete a user by ID (admin only)',
      tags: ['Users'],
      security: [{ bearerAuth: [] }],
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
        403: { description: 'Forbidden' },
        404: { description: 'User not found' }
      },
    },
  },
};
