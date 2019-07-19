const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  title: String,
  image: { type: String },
  mainDish: { type: Schema.Types.ObjectId, ref: "Item" },
  price: Number,
  description: String,
  category: { type: String, enum: ["kid", "adult"], default: "adult" }
});

const menuModel = mongoose.model("Menu", menuSchema);

module.exports = menuModel;
