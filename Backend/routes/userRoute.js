const express = require("express");
const userSignUp = require("../controllers/UserApi/userSignUp");
const userLogin = require("../controllers/UserApi/UserLogin");
const allUsers = require("../controllers/UserApi/allUsers");
const router = express.Router();

router.post("/signup", userSignUp);
router.post("/login", userLogin);
router.get("/all", allUsers);

module.exports = router;
