const express = require("express");
const router = express.Router();
const {
  createUser,
  getUser,
  loginUser,
} = require("../controllers/userController");

const userValidationSchema = require("../validationSchemas.js");
const validation = require("../middleware/validation");

router.route("/email=:userEmail").get((req, res) => {
  getUser(req, res, req.params.userEmail);
});
router.route("/register").post((req, res) => {
  const validateUserInfo = async () => {
    const isValid = await validation(req, res, userValidationSchema);
    return isValid;
  }
  const isValid = validateUserInfo();
  
  if (isValid) {
    console.log('isValid: ', isValid);
    createUser(req, res);
  } else {
    console.log('!isValid');
  }
});
router.route("/login").post(loginUser);

module.exports = router;
