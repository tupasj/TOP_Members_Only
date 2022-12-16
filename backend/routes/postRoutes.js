const express = require("express");
const router = express.Router();
const { addPost } = require("../controllers/postController");

router.route("/add").post(addPost);

module.exports = router;
