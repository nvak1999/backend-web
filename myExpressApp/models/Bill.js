const mongoose = require("mongoose");

const billSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true },
  idProduct: { type: String, required: true, unique: true },
  title:{type: String, required: true, unique: true},
  amount: { type: String, required: true, unique: true },
  unit_price: { type: String, required: true, unique: true },
  Total_amount: { type: String, required: true, unique: true },
},
{timestamps: true}
);

const Bill = mongoose.model("Bill", billSchema);
module.exports = Bill;
