const express = require("express");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const db = require("./db");
const app = express();
const cors = require("cors");
const logger = require("morgan");

const { Restaurant } = require("./models");

//MIDDLEWARE
app.use(express.static(`${__dirname}/client/build`));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(logger("dev"));

app.use("/api", routes);

// ROUTEs
// //Get all restaurants
// app.get("/restaurants", async (req, res) => {
//   let restaurants = await Restaurant.find({});
//   res.send(restaurants);
// });

// //Create a restaurant
// app.post("/restaurants", async (req, res) => {
//   let createdRestaurant = await Restaurant.create(req.body); //req.body - the 'form' information to post up.
//   res.send(createdRestaurant);
// });

// //get a single restaurant
// app.get("/restaurants/:id", async (req, res) => {
//   let foundRestaurant = await Restaurant.findById(req.params.id);
//   res.send(foundRestaurant);
// });

app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.listen(PORT, () => {
  console.log(`Running on PORT :, PORT`);
});

// once set... this is commeneted out to move to controllers.index.
