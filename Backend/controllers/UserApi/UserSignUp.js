const bcrypt = require("bcryptjs");
const userModel = require("../../models/userModel");

const userSignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({
        message: "Fill all the fields correctly",
        success: false,
      });
    }

    const user = await userModel.findOne({ email });

    if (user) {
      return res.json({
        message: "Email Alredy Registered !",
        success: false,
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    if (!hashPassword) {
      return res.json({
        message: "Password error",
        success: false,
      });
    }

    const payload = {
      ...req.body,
      password: hashPassword,
    };

    const userdata = new userModel(payload);
    const saveuser = await userdata.save();

    res.status(200).json({
      message: "User Created Successfully",
      Data: saveuser,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error,
      success: false,
    });
  }
};

module.exports = userSignUp;
