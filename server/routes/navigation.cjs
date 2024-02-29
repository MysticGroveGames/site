const dbConnection = require('../db/conn.cjs');
const { Router } = require('express');
const router = Router();

router.get("/", async (req, res) => {
  try {
    const db = await dbConnection();
    let gamesCollection = db.collection("Boardgames");
    let gameNavProjection = { 
      name: 1, 
      displayName: 1,
      summary: 1
    }

    let gameNavItems = await gamesCollection
      .find({showInPrimaryNav: true})
      .project(gameNavProjection)
      .limit(50)
      .toArray();
    

    let navCollection = db.collection("Navigation");
    let primaryNavItems = await navCollection
      .find({showInPrimaryNav: true})
      .limit(50)
      .toArray();

    res.send({gameNavItems, primaryNavItems}).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = { router };