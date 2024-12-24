const cartModel = require("../../models/cartModel");
const orderModel = require("../../models/orderModel");

const orderController = async (req, res) => {
  try {
    const userId = req.user;
    const { fullname, email, phone, address, totalPrice } = req.body;

    const cartItems = await cartModel.findOne({ userId });

    if (!cartItems || cartItems.items.length === 0) {
      return res.status(400).json({
        message: "Cart is empty. Cannot place an order.",
        success: false,
      });
    }

    const existingOrder = await orderModel.findOne({ userId });

    if (existingOrder) {
      existingOrder.fullname = fullname || existingOrder.fullname;
      existingOrder.email = email || existingOrder.email;
      existingOrder.phone = phone || existingOrder.phone;
      existingOrder.address = address || existingOrder.address;
      existingOrder.cartorders.push(...cartItems.items);
      existingOrder.totalPrice += totalPrice;
      await existingOrder.save();

      await cartModel.findOneAndUpdate({ userId }, { $set: { items: [] } });

      return res.status(200).json({
        message: "Order updated successfully with new items",
        data: existingOrder,
        success: true,
      });
    } else {
      const payload = {
        fullname,
        email,
        phone,
        address,
        totalPrice,
        userId,
        cartorders: cartItems.items, 
      };

      const newOrder = new orderModel(payload);
      const savedOrder = await newOrder.save();

      await cartModel.findOneAndUpdate({ userId }, { $set: { items: [] } });

      return res.status(200).json({
        message: "Order placed successfully",
        data: savedOrder,
        success: true,
      });
    }
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      success: false,
    });
  }
};

module.exports = orderController;
