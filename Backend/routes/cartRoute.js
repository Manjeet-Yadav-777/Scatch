const express = require("express");
const Authenticated = require("../middlewares/isAuth");
const addToCart = require("../controllers/CartApi/addToCart");
const userCart = require("../controllers/CartApi/userCart");
const removeItem = require("../controllers/CartApi/removeItem");
const descresQty = require("../controllers/CartApi/descresQty");
const clearCart = require("../controllers/CartApi/clearCart");
const router = express.Router();

router.post("/add", Authenticated, addToCart);
router.get("/user", Authenticated, userCart);
router.post("/descres", Authenticated, descresQty);
router.delete("/delete/:productId", Authenticated, removeItem);
router.delete("/clear", Authenticated, clearCart);

module.exports = router;
