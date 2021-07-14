
const express = require("express");
const router = express.Router();
const billController = require("../controller/billController");
const authMiddleware = require("../middleware/authentication");

router.get("/", billController.getAllData);
router.post("/", billController.createData);
router.get("/:id", billController.getData);

module.exports = router;
