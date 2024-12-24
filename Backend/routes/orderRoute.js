const express = require("express");
const Authenticated = require("../middlewares/isAuth");
const orderController = require("../controllers/OrderApi/orderController");
const userOrderController = require("../controllers/OrderApi/userOrderController");
const allOrders = require("../controllers/OrderApi/allOrders");
const getAddress = require("../controllers/OrderApi/getAddress");
const updateOrderStatus = require("../controllers/OrderApi/updateOrderStatus");
const router = express.Router();

router.post("/order", Authenticated, orderController);
router.get("/user/orders", Authenticated, userOrderController);
router.get("/all", Authenticated, allOrders);
router.get("/address", Authenticated, getAddress);
router.put("/update-status/:orderId", Authenticated, updateOrderStatus);

module.exports = router;
