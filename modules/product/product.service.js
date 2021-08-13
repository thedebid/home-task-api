const productModel = require("./product.model");

//get all products
function getAll() {
  return productModel.find({});
}

//get products by user id
function getByUserId(id) {
  return productModel.find({ user: id });
}

//save products
function save(product, user, image) {
  var newProduct = new productModel({});
  newProduct.title = product.title;
  newProduct.description = product.description;
  newProduct.price = product.price;
  newProduct.image = image;
  newProduct.user = user._id;
  return newProduct.save();
}

module.exports = {
  save,
  getByUserId,
  getAll,
};
