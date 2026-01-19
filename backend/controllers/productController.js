const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
};

exports.searchProduct = async (req, res) => {
  const { name } = req.query;

  const products = await Product.find({
    productName: new RegExp(name, "i")
  })
    .populate("shopId")
    .sort({ price: 1 });

  res.json(products);
};
