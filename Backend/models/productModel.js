const mongoose = require("mongoose");

const productModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },  

  category: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  new_price: {
    type: Number,
    required: true,
  },

  old_price: {
    type: Number,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Products", productModel);
