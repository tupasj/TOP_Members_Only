const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userValidationSchema = require("../validationSchemas.js");
const validation = require("../middleware/validation");

const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: "3d" });
};

const getUser = async (req, res, email) => {
  console.log("email: ", email);
  try {
    const user = await User.findOne({ email });
    res.status(200).json(user);
  } catch (error) {
    console.log("error:", error);
    res.status(400).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const isValid = await validation(req, res, userValidationSchema);
    console.log('isValid: ', isValid);
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
    res.status(201).json(newUser);
  } catch (error) {
    console.log("error: ", error.message);
    res.status(400).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({ email });
  const passwordMatch = await bcrypt.compare(password, user.password);

  try {
    if (passwordMatch) {
      const token = createToken(user._id);
      res.status(201).json({ email, token });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getUser,
  createUser,
  loginUser,
};
