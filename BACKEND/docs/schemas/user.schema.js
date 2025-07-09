module.exports = {
  User: {
    type: 'object',
    required: ['name', 'email', 'password'],
    properties: {
      id: {
        type: 'integer',
        description: 'Auto-generated ID',
      },
      name: {
        type: 'string',
      },
      email: {
        type: 'string',
      },
      password: {
        type: 'string',
      },
    },
    example: {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'secret123',
    },
  },
};

