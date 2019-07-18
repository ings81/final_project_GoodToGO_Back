const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  title: String,
  Image: [{}],
  ingredients: String,
  description: String
});

const menuModel = mongoose.model("Menu", menuSchema);

module.exports = menuModel;
