const cartPaths = require('./cart.swagger');
const schemas = require('./schemas');
const PORT = process.env.PORT || 3001;

module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'E-commerce API',
    version: '1.0.0',
    description: 'Auto-documented routes from external files',
  },
  servers: [{ url: `http://localhost:${PORT}` }],
  paths: {
    ...cartPaths,
    // ...otherPaths
  },
  components: {
    schemas: {
      ...schemas,
      // ...otherSchemasfolder
    }
  }
};


