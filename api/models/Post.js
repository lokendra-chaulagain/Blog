const mongoose = require("mongoose");

//PostSchema
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 4,
      unique: true,
      maxlength:300,
    },

    desc: {
      type: String,
      required: true,
      trim: true,
      maxlength: 5000,
    },

    username: {
      type: String,
    },

    timeRead: {
      type: String,
    },

    img: {
      type: String,
      default: "",
    },

    categories: {
      type: Array,
    },

    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
