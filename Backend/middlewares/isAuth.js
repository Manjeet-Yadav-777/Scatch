require("dotenv").config();
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const Authenticated = async (req, res, next) => {
  const token = req.header("Auth");

  if (!token) {
    return res.json({
      message: "Login First",
      success: false,
    });
  }

  const decoded = jwt.verify(token, `${process.env.SECRET_KEY}`);
  const id = decoded.userId;

  let user = await userModel.findById(id);

  if (!user) {
    return res.json({
      message: "User Not Exist",
      success: false,
    });
  }

  req.user = user;
  next();
};

module.exports = Authenticated;
