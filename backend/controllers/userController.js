const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const getUser = async (req, res, email) => {
  try {
    const user = await User.findOne({ email });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  console.log('createUser()');
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user = new User({
    email: req.body.email,
    name: req.body.name,
    password: hashedPassword,
  });

  try {
    const newUser = await user.save();
    console.log('newUser: ', newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.log('error: ', error.message);
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getUser,
  createUser,
};
