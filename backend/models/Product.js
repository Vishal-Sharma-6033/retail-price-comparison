const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: String,
  brand: String,
  price: Number,
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop"
  },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Product", productSchema);
