const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commandSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  menus: [{ type: Schema.Types.ObjectId, ref: "Menu" }],
  articles: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  totalPrice: Number,
  orderRef: String
});

const commandModel = mongoose.model("Command", commandSchema);

module.exports = commandModel;
