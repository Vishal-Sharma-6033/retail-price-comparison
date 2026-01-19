const Shop = require("../models/Shop");

exports.addShop = async (req, res) => {
  try {
    const shop = await Shop.create(req.body);
    res.status(201).json(shop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
