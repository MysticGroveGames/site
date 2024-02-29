require('./loadEnvironmentVariables.cjs');
const Express = require('express');
const games = require('./routes/games.cjs').router;
const navigation = require('./routes/navigation.cjs').router;
// const express = require("express");
// const app = express();
const app = Express();
const port = process.env.PORT || 3500;

app.use("/api/games", games);
app.use("/api/primarynav", navigation);

app.get("/api", (req, res, next) => {
  try{
    res.send({ message: "Welcome to the home page!" });
  } catch(error) {
    next(error)
  }
});

// app.get("/api/shop", (req, res, next) => {
//   try{
//     res.send({ message: "Welcome to the shopping page!" });
//   } catch(error) {
//     next(error)
//   }
// });

// app.get("/api/games", async (req, res, next) => {
//   try {
//     // Access a MongoDB collection
//     const collection = client.db("mgg").collection("boardgames");

//     // Fetch data from MongoDB
//     const products = await collection.find({}).toArray();

//     res.send({ products });
//   } catch (error) {
//     next(error);
//   }
// });

app.get("/api/*", (req, res) => {
  res.send({ message: "Hello from Express!" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));