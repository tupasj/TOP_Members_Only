require("dotenv").config();
require("colors");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const connectToDatabase = require("./config/databaseConfig");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

connectToDatabase();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/user", userRoutes);
app.use("/post", postRoutes);

app.get("/", (req, res) => {
  res.send("Hello from the backend");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
