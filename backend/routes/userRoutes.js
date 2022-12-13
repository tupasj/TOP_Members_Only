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
router.route("/register").post(createUser);
router.route("/login").post(loginUser);

module.exports = router;