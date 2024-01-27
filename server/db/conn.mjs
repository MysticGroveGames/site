import { MongoClient } from "mongodb";
const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log('Mongo connected')
} catch(e) {
  console.error(e);
}
let db = conn.db("MGG");
export default db;
