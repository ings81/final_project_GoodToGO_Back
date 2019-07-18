const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  Title: String,
  Image: [{ type: String }],
  Ingredients: [{ type: String }],
  Description: String
});

const menuModel = mongoose.model("Menu", menuSchema);

module.exports = menuModel;
