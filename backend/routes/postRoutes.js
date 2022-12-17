const express = require("express");
const router = express.Router();
const {
  addPost,
  getPosts,
  deletePost,
} = require("../controllers/postController");

router.route("/add").post(addPost);
router.route("/get").get(getPosts);
router.route("/delete/:postID").delete(deletePost);

module.exports = router;
