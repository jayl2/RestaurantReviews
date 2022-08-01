const { Router } = require("express");
const router = Router();
const { restaurants, reviews } = require("../controllers");
//Restaurants route
router.get("/restaurants", restaurants.getAllRestaurants);
router.post("/restaurants", restaurants.createRestaurant);
router.get("/restaurants/:id", restaurants.getOneRestaurant);
router.post("/restaurants/:id/reviews", reviews.createReview);

//Reviews route
router.get("/reviews", reviews.getAllReviews);

router.get("/reviews/:id", reviews.getReview);
router.put("/reviews/:id", reviews.updateReview);
router.delete("/reviews/:id", reviews.deleteReview);

module.exports = router;
