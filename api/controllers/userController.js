const User = require("../models/User");
const bcrypt = require("bcrypt");

//Update
const update = async (req, res, next) => {
  if (!req.body.password) {
    delete req.body.password;
  }

  if (req.body.password) {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Delete
const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUser) + "User deleted";
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get a user
const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get all user
const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { update, deleteUser, getUser, getAllUser };
