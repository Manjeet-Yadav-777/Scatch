const addProduct = require("../controllers/ProductApi/addProduct");

const express = require("express");
const getProducts = require("../controllers/ProductApi/getProducts");
const getSingleProduct = require("../controllers/ProductApi/getSingleProduct");
const deleteProduct = require("../controllers/ProductApi/deleteProduct");
const router = express.Router();

router.post("/add", addProduct);
router.get("/all", getProducts);
router.get("/:id", getSingleProduct);   
router.delete("/delete/:id", deleteProduct);

module.exports = router;
