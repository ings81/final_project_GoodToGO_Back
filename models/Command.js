const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commandSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    articles: [
      {
        title: String,
        price: Number,
        image: String
      }
    ],
    orderRef: String
  },
  { timestamps: { createAt: "created_at" } }
);

const commandModel = mongoose.model("Command", commandSchema);

module.exports = commandModel;
