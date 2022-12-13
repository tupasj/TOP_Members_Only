require("dotenv").config();
require("colors");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const connectToDatabase = require("./config/databaseConfig");
const userRoutes = require("./routes/userRoutes");

connectToDatabase();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/user", userRoutes);


app.get("/", (req, res) => {
  res.send("Hello from the backend");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
