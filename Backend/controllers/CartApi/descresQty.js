const cartModel = require("../../models/cartModel");

const descresQty = async (req, res) => {
  const { productId, qty } = req.body;

  const userId = req.user;

  let cart = await cartModel.findOne({ userId });

  if (!cart) {
    cart = new cartModel({ userId, items: [] });
  }

  const itemIndex = cart.items.findIndex(
    (item) => item.productId.toString() === productId
  );

  if (itemIndex > -1) {
    const item = cart.items[itemIndex];

    if (item.qty > qty) {
      const pricePerUnit = item.new_price / item.qty;

      item.qty -= qty;
      item.new_price -= pricePerUnit * qty;
    } else {
      cart.items.splice(itemIndex, 1);
    }
  } else {
    res.status(401).json({
      message: "Product is invalid",
    });
  }
  await cart.save();
  res.status(200).json({
    message: "Item qty decrease",
    cart,
  });
};

module.exports = descresQty;
