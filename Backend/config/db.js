const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(`${process.env.MONGO_URI}/scatch`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Database Connected");
});

mongoose.connection.on("error", (error) => {
  console.log(`Database Error: ${error}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Database Disconnected");
});

module.exports = mongoose;
