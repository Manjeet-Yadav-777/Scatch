const cartModel = require("../../models/cartModel");

const removeItem = async (req, res) => {
  const productId = req.params.productId;
  const userId = req.user;

  let cart = await cartModel.findOne({ userId });

  if (!cart) {
    return res.json({
      message: "Cart not Found",
    });
  }

  cart.items = cart.items.filter(
    (item) => item.productId.toString() !== productId
  );

  await cart.save();

  res.status(200).json({
    message: "Product removerd from Cart",
    cart,
  });
};

module.exports = removeItem;
