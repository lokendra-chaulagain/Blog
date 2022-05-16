const jwt = require("jsonwebtoken");

//Verify Token
const verifyToken = (req, res, next) => {
    //taking token from cookies
  const token = req.cookies.access_token;
  //if there is no token
  if(!token){
      return res.status(401).json("No token in cookie so you are not authenticated")
  }
    //if there is token check it is valid or not
    jwt.verify(token,process.env.JWT_SECRET,(error,userInfo)=>{
        if(error){
            return res.status(401).json("Invalid token")
        }
        req.user=userInfo
        next()
    })
};

//export module
module.exports = verifyToken;
