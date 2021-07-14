const Bill = require("../models/Bill");

const billController = {};

billController.getAllData = async (req, res, next) => {
  try {
    let { page, limit, sortBy, ...filter } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    const totalBills = await Bill.countDocuments({
      ...filter,
    });

    const totalPages = Math.ceil(totalBills / limit);

    const offset = (page - 1) * limit;

    const bills = await Bill.find(filter)
      .skip(offset)
      .limit(limit)
      .populate("id")
      .populate("title");

    res.status(200).json({
      status: "Success",
      data: { bills, totalPages },
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

billController.getData = async (req, res, next) => {
  try {
    // How to get the data
    const bill = await Bill.findById(req.params.id)
      .populate("id", "-_id -__v")
      .populate("title", "-_id -__v");

    res.status(200).json({
      status: "Success",
      data: bill,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

billController.createData = async (req, res, next) => {
  try {
    const id = req.id;
    const {idproduct, title, amount, unit_price, Total_amount } =
      req.body;
    const product = new Product({
      idproduct: idproduct,
      title: title,
      amount: amount,
      unit_price: unit_price,
      Total_amount: Total_amount,
    });
    await Bill.save();

    res.status(200).json({
      status: "Success",
      data: bill,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

module.exports = billController;