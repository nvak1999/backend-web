const Product = require("../models/Product");

const productController = {};

productController.getAllData = async (req, res, next) => {
  try {
    let { page, limit, sortBy, ...filter } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    const totalProducts = await Product.countDocuments({
      ...filter,
    });

    const totalPages = Math.ceil(totalProducts / limit);

    const offset = (page - 1) * limit;

    const products = await Product.find(filter)
      .skip(offset)
      .limit(limit)
      .populate("idProduct")
      .populate("title");

    res.status(200).json({
      status: "Success",
      data: { products, totalPages },
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

productController.getData = async (req, res, next) => {
  try {
    // How to get the data
    const product = await Product.findById(req.params.id)
      .populate("idProduct", "-_id -__v")
      .populate("title", "-_id -__v");

    res.status(200).json({
      status: "Success",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

productController.createData = async (req, res, next) => {
  try {
    const idProduct = req.idProduct;
    const { title, description, seller, address, price, unit_pricing_measure } =
      req.body;
    const product = new Product({
      idProduct: idProduct,
      title: title,
      description: description,
      seller: seller,
      address: address,
      price: price,
      unit_pricing_measure: unit_pricing_measure,
    });
    await Product.save();

    res.status(200).json({
      status: "Success",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};

module.exports = productController;
