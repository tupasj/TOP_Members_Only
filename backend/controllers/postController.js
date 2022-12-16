const User_Post = require("../models/user_PostModel");

const addPost = async (req, res) => {
  try {
    const newPost = new User_Post({
      author: req.body.author,
      textContent: req.body.textContent,
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addPost,
};