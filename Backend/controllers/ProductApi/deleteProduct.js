const productModel = require("../../models/productModel");

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const product = await productModel.findByIdAndDelete(id, req.body, {
      new: true,
    });

    if (!product) {
      return res.json({
        message: "Product Not Found",
      });
    }

    res.status(200).json({
      message: "Product Deleted Successfully",
      success: true,
      product,
    });
  } catch (error) {
    res.json({
      message: error,
      success: false,
    });
  }
};

module.exports = deleteProduct;
