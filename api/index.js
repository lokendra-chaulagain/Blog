const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const authRoute = require('./routes/auth');
const User = require('./models/User');
const userRoute = require('./routes/users');
const postRoute = require('./routes/Posts');
const categoryRoute = require('./routes/categories');
const multer = require('multer');



//middleware
app.use(express.json());



//MongoDB connection
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('MongoDB Connection Successful'))
    .catch(err => console.log(err));


//Routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);


//Multer Storage 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, "coffee.png");
    },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});




//Port listening
app.listen(5000, () => {
    console.log('Server is running on port 5000');

})







