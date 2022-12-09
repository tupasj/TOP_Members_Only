const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/userController");

router.route("/register").post(createUser);
// router.post("/login", (req, res) => {
//   console.log(req.body);
// });

module.exports = router;
