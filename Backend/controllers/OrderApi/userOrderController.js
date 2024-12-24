const orderModel = require("../../models/orderModel");

const userOrderController = async (req, res) => {
  const userId = req.user;

  let orders = await orderModel.findOne({ userId });

  if (!orders) {
    return res.json({
      message: "No Placed Orders",
      success: false,
    });
  }

  res.json({
    message: "Your Orders",
    data: orders,
    success: true,
  });
};

module.exports = userOrderController;
