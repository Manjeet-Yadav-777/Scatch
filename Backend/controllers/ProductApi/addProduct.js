const productModel = require("../../models/productModel");

const addProduct = async (req, res) => {
  try {
    const { name, description, category, image, new_price, old_price } =
      req.body;

    const payload = {
      ...req.body,
    };

    const productdata = new productModel(payload);
    const saveproduct = await productdata.save();

    res.json({
      message: "Product Created Successfully",
      data: saveproduct,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error,
      success: false,
    });
  }
};

module.exports = addProduct;
