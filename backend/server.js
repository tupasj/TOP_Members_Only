require("dotenv").config();
require('colors');
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const connectToDatabase = require('./config/databaseConfig');

connectToDatabase();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from the backend");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});