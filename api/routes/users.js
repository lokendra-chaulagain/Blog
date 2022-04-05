const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');


//UPDATE
router.put("/:id", async (req, res) => {

    //verify if the user is owner or not
    if (req.body.userId === req.params.id) {
        //if user is updating  password we have to hash it

        if (req.body.password) {
            try {
                //generate salt to hash the password
                const salt = await bcrypt.genSalt(10);

                //hash the password
                req.body.password = await bcrypt.hash(req.body.password, salt);

            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        }

        //update the user
        try {
            const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body });
            res.status(200).json({ message: "User updated successfully", user });



        } catch (error) {
            res.status(500).json({ message: error.message });

        }


    } else {
        res.status(401).json({ message: "You are not authorized to update this user" });
    }

})


//DELETE
router.delete("/:id", async (req, res) => {
    //verify if the user is owner or not
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "User deleted successfully", user });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    } else {
        res.status(401).json({ message: "You are not authorized to delete this user" });
    }
})


//export
module.exports = router;


