const express = require("express");
const router = express.Router();
const { addShop } = require("../controllers/shopController");

router.post("/add", addShop);

module.exports = router;
