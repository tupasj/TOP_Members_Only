const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: {
        type: String,
        required: true,
    },
    textContent: {
        type: String,
        required: true,
    },
    postedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "users.posts",
    timestamps: true,
  }
);

module.exports = mongoose.model("User_Post", postSchema);
