const express = require("express");
const router = express.Router();
const authController = require("./auth.controller");

router.route("/login").post(authController.userAuthenticate);
router.route("/register").post(authController.userRegister);

module.exports = router;
