const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const {
  update,
  deleteUser,
  getUser,
  getAllUser,
} = require("../controllers/userController");
const { verifyUser } = require("../utils/verifyToken");

//Update user
router.put("/update/:id", verifyUser, update);

//Delete user
router.delete("/delete/:id", verifyUser, deleteUser);

//Get a user
router.get("/get/:id", getUser);

//Get all user
router.get("/getAll", getAllUser);

//export
module.exports = router;
