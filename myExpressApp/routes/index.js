var express = require("express");
var router = express.Router();
const userApi = require("./user.api");

router.use("/user", userApi);

module.exports = router;
