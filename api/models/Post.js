const mongoose = require("mongoose");

//PostSchema
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 4,
      unique: true,
      maxlength: 20,
    },

    desc: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    username: {
      type: String,
    },

    timeRead:{
      type: String,
    },

    img: {
      type: String,
      default: "assets/post/1.jpeg",
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

//creating model and exporting
module.exports = mongoose.model("Post", PostSchema);
