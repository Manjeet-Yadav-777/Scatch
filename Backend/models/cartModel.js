const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  qty: {
    type: Number,
    reqired: true,
  },

  image: {
    type: String,
    required: true,
  },

  new_price: {
    type: Number,
    required: true,
  },
});

const cartModel = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  items: [cartItemSchema],

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Cart", cartModel);
