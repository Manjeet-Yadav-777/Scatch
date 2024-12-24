const productModel = require("../../models/productModel");

const getProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.json({
      message: "All Products",
      products,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error,
      success: false,
    });
  }
};

module.exports = getProducts;
