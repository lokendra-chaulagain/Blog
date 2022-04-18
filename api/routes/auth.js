const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');


//REGISTER  
router.post("/register", async (req, res) => {
    try {
        //generate salt to hash the password
        const salt = await bcrypt.genSalt(10);

        //hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        //create a new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        })

        //save the user
        const user = await newUser.save();
        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
})


//LOGIN
router.post("/login", async (req, res) => {
    try {
        //first find the user by email
        const user = await User.findOne({ username: req.body.username })

        //if user exists
        if (user) {
            //check the user password with hashed password
            const validPassword = await bcrypt.compare(req.body.password, user.password)

            //if password is valid
            if (validPassword) {

                //hiding the password from the response
                const { password, ...others } = user._doc;

                res.status(200).json(others)
            } else {
                res.status(400).json({ message: "Invalid password" })
            }

        } else {
            res.status(400).json({ message: "User does not exist" })
        }


    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


//export
module.exports = router
