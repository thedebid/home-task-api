const productService = require("./product.service");

function createProduct(req, res) {
  //console.log(req.body);
  // console.log(req.file);
  var file = "";
  // console.log(req.file);
  if (req.file) {
    file = req.file.filename;
  }
  productService
    .save(req.body, req.user, file)
    .then(function (result) {
      res.status(200).json(result);
    })
    .catch(function (err) {
      res.status(400).json(err);
    });
}

function getProducts(req, res) {
  productService
    .getAll()
    .then(function (result) {
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(404).json("No product found");
      }
    })
    .catch(function (err) {
      res.status(400).json(err);
    });
}
async function getProductByUser(req, res) {
  productService
    .getByUserId(req.params.id)
    .then((result) => {
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(404).json("No product found with this user");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

module.exports = {
  createProduct,
  getProducts,
  getProductByUser,
};
