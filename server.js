const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

//MIDDLEWARE
app.use(express.static(`${__dirname}/client/build`));

//ROUTEs
app.get("/", (req, res) => {
  res.send("I have root");
});

app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.listen(PORT, () => {
  console.log(`Running on PORT :, PORT`);
});
