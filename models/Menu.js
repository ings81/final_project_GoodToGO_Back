const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  title: String,
  Image: [{ type: String }],
  description: String,
  ingredients: String
});

const menuModel = mongoose.model("Menu", menuSchema);

module.exports = menuModel;
