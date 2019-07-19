const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alimentSchema = new Schema({
  title: String,
  image: { type: String },
  price: Number,
  category: {
    type: String,
    enum: ["drink", "burger", "wrap", "salad", "desert", "breakfast", "snack"],
    default: "burger"
  }
});

const itemModel = mongoose.model("Item", alimentSchema);

module.exports = itemModel;
