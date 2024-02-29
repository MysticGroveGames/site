const { MongoClient } = require("mongodb");
const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);

module.exports = async function dbConnection() {
  try {
    const conn = await client.connect();
    console.log('Mongo connected');
    return conn.db("MGG");
  } catch (e) {
    console.error(e);
    throw e; 
  }
};
