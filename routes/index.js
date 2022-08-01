const { Router } = require("express");
const router = Router();
const { restaurants, reviews } = require("../controllers");
//Restaurants route
router.get("/restaurants", restaurants.getAllRestaurants);
router.post("/restaurants", restaurants.createRestaurant);
router.get("/restaurants/:id", restaurants.getOneRestaurant);

//Reviews route
router.get("/reviews", reviews.getAllReviews);
router.post("/reviews", reviews.createReview);

module.exports = router;
