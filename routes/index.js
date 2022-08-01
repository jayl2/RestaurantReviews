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
router.get("/reviews/:id", reviews.getReview);
router.put("/reviews/:id", reviews.updateReview);

module.exports = router;
