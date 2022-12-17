const User_Post = require("../models/user_PostModel");

const addPost = async (req, res) => {
  try {
    const newPost = new User_Post({
      author: req.body.author,
      textContent: req.body.textContent,
    });
    await newPost.save();
    res.status(201).end();
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json({ message: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await User_Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

const deletePost = async (req, res) => {
  try {
    await User_Post.deleteOne({_id: req.params.postID});
    res.status(200).end();
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

module.exports = {
  addPost,
  getPosts,
  deletePost,
};
