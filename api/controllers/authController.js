const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Register
const register = async (req, res, next) => {
  try {
    //hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    //create a new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    //save the user
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Login
const login = async (req, res, next) => {
  try {
    //find user by username
    const user = await User.findOne({ username: req.body.username });

    //if user exists check password
    if (user) {
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      //if password match create token
      if (validPassword) {
        //create token//hiding these details in the token and passing this token in cookies
        const token = jwt.sign(
          {
            id: user._id,
            username: user.username,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );
        //now saving the token in the cookies
        const { password, ...others } = user._doc;
        res
          .cookie("access_token", token, { httpOnly: true })
          .status(200)
          .json(others);
      } else {
        return next(createError(401, "Invalid password"));
      }
    } else {
      return next(createError(401, "User not found "));
    }
  } catch (error) {
    next(error);
  }
};

//export
module.exports = { register, login };
