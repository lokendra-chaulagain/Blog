const router = require("express").Router();
const {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getAllPosts,
} = require("../controllers/postController");
const Post = require("../models/Post");
const { verifyToken, verifyUser } = require("../utils/verifyToken");

//Create
router.post("/create", verifyToken, createPost);

//Update
router.put("/update/:id", verifyUser, updatePost);

//Delete
router.delete("/delete/:id", verifyUser, deletePost);

//GET A POST
router.get("/get/:id", getPost);

//Get all posts and post with query
router.get("/getAll", getAllPosts);

//export
module.exports = router;
