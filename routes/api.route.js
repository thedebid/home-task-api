const router = require("express").Router();
const authRoute = require("../modules/auth/auth.route");
const productRoute = require("../modules/product/product.route");
const authorize = require("./../middlewares/authorize");

router.use("/auth", authRoute);
router.use("/product", productRoute);

module.exports = router;
