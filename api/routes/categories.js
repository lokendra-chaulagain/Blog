const router = require('express').Router();
const Category = require('../models/Category');


//CREATE NEW CATEGORY
router.post("/", async (req, res) => {
    try {
        const newCat = new Category(req.body);

        //save the post
        const savedCat = await newCat.save();
        res.status(200).json({ message: "Category created successfully", savedCat });

    } catch (error) {
        res.status(500).json({ message: error.message });

    }
})


//GET ALL CATEGORY
router.get("/", async (req, res) => {
    try {
        const Cats = await Category.find();
        res.status(200).json({ message: "All categories", Cats });

    } catch (error) {
        res.status(500).json({ message: error.message });

    }
})


































//export
module.exports = router;