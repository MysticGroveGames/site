const express = require("express");
const app = express();
const port = process.env.PORT || 3500;

app.get("/api/home", (req, res, next) => {
  try{
    res.send({ message: "Welcome to the home page!" });
  } catch(error) {
    next(error)
  }
});

app.get("/api/*", (req, res) => {
  res.send({ message: "Hello from Express!" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));