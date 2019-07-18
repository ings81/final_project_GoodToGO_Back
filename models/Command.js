const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commandSchema = new Schema({
  User: String,
  Menu: [{ type: String }],
  Articles: [{ type: String }],
  TotalPrice: Number
});

const commandModel = mongoose.model("Command", commandSchema);

module.exports = commandModel;
