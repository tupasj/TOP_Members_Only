const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { protect } = require("../middleware/authMiddleware");

const userValidationSchema = require("../validationSchemas.js");
const validation = require("../middleware/validation");

const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const getUser = async (req, res, next) => {
  protect(req, res, next);
  const email = req.params.userEmail;

  try {
    const user = await User.findOne({ email });
    const token = createToken(user._id);
    res.status(200).json({ user, token });
  } catch (error) {
    console.log("error:", error);
    res.status(400).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const isValid = await validation(req, res, userValidationSchema);
    console.log("isValid: ", isValid);
    if (!isValid) {
      throw new Error("User info not valid");
    }

    console.log("createUser()");
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      email: req.body.email,
      name: req.body.name,
      password: hashedPassword,
    });

    const newUser = await user.save();
    const token = createToken(newUser._id);
    console.log("token: ", token);
    res.cookie("jwt", token, { httpOnly: true });
    res.status(201).json(newUser);
  } catch (error) {
    console.log("error: ", error.message);
    res.status(400).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const token = createToken(user._id);
      res.cookie("jwt", token, { httpOnly: true });
      res
        .status(200)
        .json({
          userID: user._id,
          admin: user.admin,
          member: user.member,
          username: user.name,
        });
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const logoutUser = async (req, res) => {
  res.clearCookie("jwt");
  res.status(200);
};

module.exports = {
  getUser,
  createUser,
  loginUser,
  logoutUser,
};
