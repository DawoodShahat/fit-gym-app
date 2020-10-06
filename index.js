const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectMongoDB = require("./config/db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect to mongo driver
connectMongoDB().catch(console.dir);

app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
});
