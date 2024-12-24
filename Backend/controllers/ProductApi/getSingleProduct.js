const productModel = require("../../models/productModel");

const getSingleProduct = async (req, res) => {
  const id = req.params.id;

  let product = await productModel.findById(id);

  if (!product) {
    return res.json({
      message: "Product Not Found",
    });
  }

  res.json({
    message: "Product Founded",
    data: product,
    success: true,
  });
};

module.exports = getSingleProduct;
