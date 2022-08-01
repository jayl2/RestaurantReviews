const { Restaurant } = require("../models");

const getAllRestaurants = async (req, res) => {
  let restaurants = await Restaurant.find({});
  res.send(restaurants);
};

const createRestaurant = async (req, res) => {
  let createdRestaurant = await Restaurant.create(req.body);
  res.send(createdRestaurant);
};

const getOneRestaurant = async (req, res) => {
  let foundRestaurant = await Restaurant.findById(req.params.id);
  res.send(foundRestaurant);
};

module.exports = {
  getAllRestaurants,
  createRestaurant,
  getOneRestaurant,
};
