const mongoose = require("mongoose")


//User Schema
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 4,
        maxlength: 12,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 12,
        maxlength: 50,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        maxlength: 150,
    },
    profilePic: {
        type: String,
        default: "",
    },


}, { timestamps: true })



//creating model and exporting
module.exports = mongoose.model("User", UserSchema)
