const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
  res.send("I have root");
});

app.listen(PORT, () => {
  console.log(`Running on PORT :, PORT`);
});
