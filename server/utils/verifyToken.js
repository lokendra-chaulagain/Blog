const jwt = require("jsonwebtoken");

//Verify Token
const verifyToken = (req, res, next) => {
  //taking token from cookies
  const token = req.cookies.access_token;
  //if there is no token
  if (!token) {
    return res
      .status(401)
      .json("No token in cookie so you are not authenticated");
  }
  //if there is token check it is valid or not
  jwt.verify(token, process.env.JWT_SECRET, (error, userInfo) => {
    if (error) {
      return res.status(401).json("Invalid token");
    }
    req.user = userInfo;
    next();
  });
};

//VerifyUser
const verifyUser = (req, res, next) => {
  //to verify user it should be authenticated first
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      //req.user.id is the id that is inside twt token
      next(); //req.params.id is the id passed in the url
    } else {
      //if id dont match and user is nit admin
      return next(createError(403, "You are not authorized!"));
    }
  });
};

//VerifyAdmin
const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

//export module
module.exports = { verifyToken, verifyUser, verifyAdmin };
