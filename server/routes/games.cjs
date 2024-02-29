const dbConnection = require('../db/conn.cjs');
const { Router } = require('express');
const router = Router();

router.get("/featured", async (req, res) => {
  try {
    const db = await dbConnection();
    let featuredProjection = { 
      name: 1, 
      displayName: 1,
      imageUrl: 1, 
      imageUrlShort: 1, 
      summary: 1
    }

    let collection = db.collection("Boardgames");
    let results = await collection
      .find({featured: true})
      .project(featuredProjection)
      .limit(50)
      .toArray();
    res.send(results).status(200);
    console.log({results})
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const db = await dbConnection();
    const gameId = req.params.id;
    let collection = db.collection("Boardgames");

    let result = await collection.findOne({ name: gameId });

    if (!result) {
      return res.status(404).json({ error: "Game not found" });
    }

    res.status(200).json(result);
    console.log({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get("/", async (req, res) => {
  const db = await dbConnection();
  let collection = db.collection("Boardgames");
  let results = await collection.find({})
    .limit(50)
    .toArray();
  res.send(results).status(200);
});

module.exports = { router };