const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  title: String,
  image: [{ type: String }],
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  price: Number,
  description: String
});

const menuModel = mongoose.model("Menu", menuSchema);

module.exports = menuModel;
