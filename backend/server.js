require("dotenv").config();
require("colors");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const connectToDatabase = require("./config/databaseConfig");
const mongoose = require("mongoose");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

connectToDatabase();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(
//   expressSession({
//     secret: "secretcode",
//     resave: true,
//     saveUninitialized: true,
//   })
// );
app.use(cookieParser("secretcode"));

app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello from the backend");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
