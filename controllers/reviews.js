const { Review, Restaurant } = require("../models");

const getAllReviews = async (req, res) => {
  let allReviews = await Review.find({});
  res.send(allReviews);
};

const createReview = async (req, res) => {
  let restaurant = await Restaurant.findById(req.params.id);
  let reviewBody = { ...req.body, restaurant: req.params.id };
  let newReview = await Review.create(reviewBody);

  restaurant.reviews.push(newReview._id);
  restaurant.save();
  res.send(newReview);
};

const getReview = async (req, res) => {
  let review = await Review.findById(req.params.id).populate("restaurant");
  res.send(review);
};

const updateReview = async (req, res) => {
  let updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(updatedReview);
};

const deleteReview = async (req, res) => {
  // res.send(req.params.id);
  let deletedRecord = await Review.findByIdAndDelete(req.params.is);
  res.send(deletedRecord);
};
module.exports = {
  getAllReviews,
  createReview,
  getReview,
  updateReview,
  deleteReview,
};
