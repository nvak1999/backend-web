var express = require("express");
var router = express.Router();
const userApi = require("./user.api");
const productApi = require("./product.api");
const billApi = require("./bill.api");

router.use("/user", userApi);
router.use("/product", productApi);
router.use("/bill", billApi);
module.exports = router;
