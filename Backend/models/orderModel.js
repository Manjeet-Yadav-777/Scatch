const mongoose = require("mongoose");

const orderModel = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  fullname: {
    type: String,
  },

  email: {
    type: String,
  },

  phone: {
    type: Number,
  },

  address: {
    type: String,
  },

  cartorders: {
    type: [],
    required: true,
  },

  totalPrice: {
    type: Number,
  },

  status: {
    type: String,
    default: "Pending",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Orders", orderModel);
