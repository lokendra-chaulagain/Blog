const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const authRoute = require('./routes/auth');
const User = require('./models/User');


//middleware
app.use(express.json());


//MongoDB connection
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('MongoDB Connection Successful'))
    .catch(err => console.log(err));


//Routes
app.use('/api/auth', authRoute);


//Port listening
app.listen(5000, () => {
    console.log('Server is running on port 5000');

})


