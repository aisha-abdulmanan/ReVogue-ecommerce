// Merges all schemas in a single file (schemas/index.js)

module.exports = {
  ...require('./cart.schema'),
  ...require('./user.schema'),
  // Add more schemas here
};
