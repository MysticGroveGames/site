import db from '../db/conn.mjs';
import { Router } from 'express';
const router = Router();

router.get("/featured", async (req, res) => {
  
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
});

router.get("/:id", async (req, res) => {
  const gameId = req.params.id;
  let collection = db.collection("Boardgames");

  try {
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
  let collection = db.collection("Boardgames");
  let results = await collection.find({})
    .limit(50)
    .toArray();
  res.send(results).status(200);
});

export { router };