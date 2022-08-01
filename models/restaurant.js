const { Schema } = require("mongoose");

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  photo_url: { type: String, required: true },
});

module.exports = restaurantSchema;
