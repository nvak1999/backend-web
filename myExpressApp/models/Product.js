const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: {type: String, required: true, unique: true },
  picture: {type: String, required: false}, 
  description:{ type: String, required: true, unique: true },
  quantity: {type: String, required: true, unique: true },
  price: {type: String, required: true, unique: true },
},
{timestamps: true}
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;