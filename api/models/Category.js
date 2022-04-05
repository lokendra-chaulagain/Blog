const mongoose = require("mongoose")


//CategorySchema
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
})


//creating model and exporting
module.exports = mongoose.model("Category", CategorySchema)