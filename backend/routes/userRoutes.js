const express = require("express");
const router = express.Router();
const {
  createUser,
  getUser,
  loginUser,
  logoutUser,
  checkMemberCode,
  checkAdminCode,
} = require("../controllers/userController");

router.route("/email=:userEmail").get((req, res, next) => {
  getUser(req, res, next);
});
router.route("/register").post((req, res) => {
  createUser(req, res);
});
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);
router.route("/memberCode=:secretMemberPasscode").patch(checkMemberCode);
router.route("/adminCode=:secretAdminPasscode").patch(checkAdminCode);

module.exports = router;