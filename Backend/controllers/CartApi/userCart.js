const cartModel = require("../../models/cartModel");

const userCart = async (req, res) => {
  const userId = req.user;

  let cart = await cartModel.findOne({ userId });

  if (!cart) {
    return res.json({
      message: "Cart Not Found",
      success: false,
    });
  }

  res.json({
    message: "User Cart",
    cart,
  });
};

module.exports = userCart;
