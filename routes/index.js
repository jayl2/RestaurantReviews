const { Router } = require("express");
const router = Router();
const { restaurants } = require("../controllers");

router.get("/restaurants", restaurants.getAllRestaurants);

router.post("/restaurants", restaurants.createRestaurant);

router.get("/restaurants/:id", restaurants.getOneRestaurant);

module.exports = router;
