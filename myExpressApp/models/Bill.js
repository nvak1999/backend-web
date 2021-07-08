const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  idBill: { type: String, required: true, unique: true },
  idProduct: { type: String, required: true, unique: true },
  amount: { type: String, required: true, unique: true },
  unit_price: { type: String, required: true, unique: true },
  Total_amount: { type: String, required: true, unique: true },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
