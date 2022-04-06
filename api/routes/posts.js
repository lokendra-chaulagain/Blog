const router = require('express').Router();
const Post = require('../models/Post');


//CREATE NEW POST
router.post("/newPost", async (req, res) => {
    try {
        const newPost = new Post(req.body);//we gonna take everything od ewq.body

        //save the post
        const savedPost = await newPost.save();
        res.status(200).json({ message: "Post created successfully", savedPost });

    } catch (error) {
        res.status(500).json({ message: error.message });

    }
})


//UPDATE A POST
router.put("/:id", async (req, res) => {//here id is post id
    try {
        //find post by id 
        const post = await Post.findById(req.params.id);

        //check if the user is owner of the post or not
        if (post.username === req.body.username) {
            //it means its our post
            //update the post
            const updatedPost = await Post.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json({ message: "Post updated successfully", updatedPost });

        } else {
            res.status(401).json({ message: "You are not authorized to update this post" });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})



//DELETE A POST
router.delete("/:id", async (req, res) => {
    try {
        //find post ny id
        const post = await Post.findById(req.params.id);//this is id of post

        //check if the user is owner of the post or not
        if (post.username === req.body.username) {
            //it means its our post we can delete it 
            const deletedPost = await Post.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Post deleted successfully", deletedPost });

        } else {
            res.status(401).json({ message: "You are not authorized to delete this post" });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });

    }
})



//GET A POST    
router.get("/:id", async (req, res) => {//post id
    try {
        //find post by id
        const post = await Post.findById(req.params.id);//post id
        res.status(200).json( post );

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})



//GET ALL POSTS and post with query
router.get("/", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username });
        } else if (catName) {
            posts = await Post.find({
                categories: {
                    $in: [catName],
                },
            });
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});





//export
module.exports = router;


