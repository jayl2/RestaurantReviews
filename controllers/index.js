//controller to help bring routes into a controller.
//Easier to compile routes into one destination. Better code organization.
//Better to plan routes.
//server routes--

//controller routes--
const restaurants = require("./restaurants");
const reviews = require("./reviews");

module.exports = {
  restaurants,
  reviews,
};
