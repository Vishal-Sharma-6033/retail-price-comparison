const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  shopName: String,
  location: String,
  owner: String
});

module.exports = mongoose.model("Shop", shopSchema);
