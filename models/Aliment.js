const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alimentSchema = new Schema({
  title: String,
  image: { type: String },
  price: Number
});

const itemModel = mongoose.model("Item", alimentSchema);

module.exports = itemModel;
