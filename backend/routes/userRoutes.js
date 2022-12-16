const express = require("express");
const router = express.Router();
const {
  createUser,
  getUser,
  loginUser,
  logoutUser,
} = require("../controllers/userController");

router.route("/email=:userEmail").get((req, res, next) => {
  getUser(req, res, next);
});
router.route("/register").post((req, res) => {
  createUser(req, res);
});
router.route("/login").post(loginUser);
router.route("/statusUpdate=:secretCode").post((req, res) => {});
router.route("/logout").get(logoutUser);

module.exports = router;
