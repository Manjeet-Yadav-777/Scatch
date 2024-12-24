const cartModel = require("../../models/cartModel");

const clearCart = async (req, res) => {
  const productId = req.params.productId;
  const userId = req.user;

  let cart = await cartModel.findOne({ userId });

  if (!cart) {
    cart = new cartModel({ items: [] });
  } else {
    cart.items = [];
  }

  await cart.save();

  res.status(200).json({
    message: "Cart Cleared",
    cart,
  });
};

module.exports = clearCart;
