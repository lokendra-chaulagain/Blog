const router = require("express").Router();
const { registerUser, login } = require("../controllers/authController");

//REGISTER
router.post("/register", registerUser);

//LOGIN
router.post("/login", login);

//export
module.exports = router;
