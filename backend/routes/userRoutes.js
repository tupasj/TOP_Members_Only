const express = require("express");
const router = express.Router();
const {
  createUser,
  getUser,
  loginUser,
} = require("../controllers/userController");

router.route("/email=:userEmail").get((req, res) => {
  getUser(req, res, req.params.userEmail);
});
router.route("/register").post((req, res) => {
  createUser(req, res);
});
router.route("/login").post(loginUser);

module.exports = router;
