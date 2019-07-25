const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  commande_en_cours: Array
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
