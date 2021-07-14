
const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
const authMiddleware = require("../middleware/authentication");

router.get("/", productController.getAllData);
router.post("/", productController.createData);
router.get("/:id", productController.getData);

module.exports = router;
