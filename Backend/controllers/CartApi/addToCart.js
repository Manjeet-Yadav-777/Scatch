const cartModel = require("../../models/cartModel");

const addToCart = async (req, res) => {
  const { productId, name, qty, image, new_price } = req.body;

  const userId = req.user;

  let cart = await cartModel.findOne({ userId });

  if (!cart) {
    cart = new cartModel({ userId, items: [] });
  }

  const itemIndex = cart.items.findIndex(
    (item) => item.productId.toString() === productId
  );

  if (itemIndex > -1) {
    cart.items[itemIndex].qty += qty;
    cart.items[itemIndex].new_price += new_price * qty;
  } else {
    cart.items.push({
      productId,
      name,
      qty,
      image,
      new_price,
    });
  }

  await cart.save();

  res.json({
    message: "Added to Cart",
    cart,
    success: true,
  });
};

module.exports = addToCart;
