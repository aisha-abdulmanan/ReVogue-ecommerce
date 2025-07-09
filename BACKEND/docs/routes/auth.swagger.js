module.exports = {
  '/auth/login': {
    post: {
      summary: 'Login and receive a JWT token',
      tags: ['Auth'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['email', 'password'],
              properties: {
                email: { type: 'string', example: 'admin@example.com' },
                password: { type: 'string', example: 'admin123' },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Login successful, returns JWT token',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  token: {
                    type: 'string',
                    description: 'JWT token',
                  },
                },
                example: {
                  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
                },
              },
            },
          },
        },
        401: {
          description: 'Invalid email or password',
        },
      },
    },
  },
};
