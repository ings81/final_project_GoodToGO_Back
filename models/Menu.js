const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  Title: String,
  Image: [{ type: String }],
  Items: [{ type: String }],
  Price: Number
});

const menuModel = mongoose.model("Menu", menuSchema);

module.exports = menuModel;
