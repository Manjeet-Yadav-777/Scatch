const userModel = require("../../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        message: "Fill all the fields",
        success: false,
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({
        message: "Account Not Found !",
        success: false,
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = jwt.sign(
        { userId: user._id },
        `${process.env.SECRET_KEY}`,
        {
          expiresIn: "365d",
        }
      );

      return res.json({
        message: `Welcome ${user.name}`,
        token,
        data: user,
        success: true,
      });
    } else {
      return res.json({
        message: "Password incorrect !",
        success: false,
      });
    }
  } catch (error) {
    return res.json({
      message: error,
      success: false,
    });
  }
};

module.exports = userLogin;
