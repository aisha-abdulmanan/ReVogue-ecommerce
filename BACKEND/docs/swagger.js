//Combines all paths and schemas manually into a JSON object

const PORT = 3001;
const cartPaths = require('./cart.swagger');
const userPaths = require('./user.swagger');
const schemas = require('./schemas');

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
    ...userPaths,
    // ...otherPaths
  },
  components: {
    schemas: {
      ...schemas,
      // ...otherSchemasfolder (if any)
    }
  }
};


