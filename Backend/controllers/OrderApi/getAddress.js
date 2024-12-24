const orderModel = require("../../models/orderModel");

const getAddress = async (req, res) => {
  try {
    const userId = req.user; 

    const order = await orderModel.findOne({ userId });

    if (!order) {
      return res.status(404).json({
        message: "No order found for this user.",
        success: false,
      });
    }

    const { fullname, email, phone, address } = order;

    res.status(200).json({
      message: "Address retrieved successfully.",
      data: { fullname, email, phone, address },
      success: true,
    });
  } catch (error) {
    console.error("Error retrieving address:", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      success: false,
    });
  }
};

module.exports = getAddress;
