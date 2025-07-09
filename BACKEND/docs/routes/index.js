// Merges all Swagger route definitions in this folder

module.exports = {
  ...require('./cart.swagger'),
  ...require('./user.swagger'),
  // Add more route swagger files here
};