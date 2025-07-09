//Combines all paths and schemas manually into a JSON object

const PORT = 3001;
const routeDocs = require('./routes');     // This auto-merges your paths
const schemas = require('./schemas');

module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'E-commerce API',
    version: '1.0.0',
    description: 'Auto-documented routes from external files',
  },
  servers: [{ url: `http://localhost:${PORT}` }],
  paths: routeDocs,
  components: {
    schemas: {
      ...schemas,
      // ...otherSchemasfolder (if any)
    },
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [{ bearerAuth: [] }], // <- apply globally or per endpoint
};


