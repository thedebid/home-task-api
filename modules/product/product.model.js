const mongose = require("mongoose");
const productSchema = mongose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    user: {
      type: mongose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const productModel = mongose.model("Product", productSchema);
module.exports = productModel;
