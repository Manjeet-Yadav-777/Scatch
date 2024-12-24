require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./config/db");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");
const orderRoute = require("./routes/orderRoute");
const path = require("path");
const bodyParser = require("body-parser");

const _dirname = path.resolve();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(urlencoded({ extended: true }));

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);

app.use(express.static(path.join(_dirname, "/Frontend/dist")));

app.get("*", (_, res) => {
  res.sendFile(path.resolve(_dirname, "Frontend", "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is listining on PORT : ${PORT}`);
});
