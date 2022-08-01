const mongoose = require("mongoose");
const restaurantSchema = require("./Restaurant");

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = {
  Restaurant,
};
