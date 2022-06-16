const mongoose = require("mongoose");

//CategorySchema
const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Category", CategorySchema);
