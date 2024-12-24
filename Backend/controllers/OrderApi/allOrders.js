const orderModel = require("../../models/orderModel");

const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find();
    res.json({
      message: "All Orders",
      data: orders,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error,
      success: false,
    });
  }
};

module.exports = allOrders;
