const express = require("express");
const router = express.Router();
const authorize = require("./../../middlewares/authorize");
const productController = require("./product.controller");
const upload = require("./../../middlewares/uploader");
router
  .route("/")
  .post(authorize, upload.single("img"), productController.createProduct)
  .get(productController.getProducts);

router.route("/:id").get(productController.getProductByUser);

module.exports = router;
