const { MongoClient } = require("mongodb");
const MongoURI = require("./keys.js").MongoURI;
const client = new MongoClient(MongoURI, { useUnifiedTopology: true });

async function connectMongoDB() {
  try {
    await client.connect();
    await client.db("gym-fit-app");
    console.log("connected successfully to server");
  } finally {
    await client.close();
  }
}

module.exports = connectMongoDB;
