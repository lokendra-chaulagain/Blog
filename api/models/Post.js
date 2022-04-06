const mongoose = require("mongoose")


//PostSchema
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 4,
        unique: true,
        maxlength: 20,
    },
    desc: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 100,
    },
    postPic: {
        type: String,
        default: "",
    },
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 4,
        maxlength: 12,
    },

    categories: {
        type: Array,
    }
}, { timestamps: true })


//creating model and exporting
module.exports = mongoose.model("Post", PostSchema)
