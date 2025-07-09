// Merges all Swagger route definitions in this folder

module.exports = {
  ...require('./cart.swagger'),
  ...require('./user.swagger'),
  ...require('./auth.swagger'),
  // Add more route swagger files here
};