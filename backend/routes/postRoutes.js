const express = require("express");
const router = express.Router();
const { addPost, getPosts } = require("../controllers/postController");

router.route("/add").post(addPost);
router.route("/get").get(getPosts);

module.exports = router;
