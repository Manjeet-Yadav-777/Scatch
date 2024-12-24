const userModel = require("../../models/userModel");

const allUsers = async () => {
  const users = await userModel.find();

  res.json({
    message: "All Users",
    data: users,
    success: true,
  });
};

module.exports = allUsers;
