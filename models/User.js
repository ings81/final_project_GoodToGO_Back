const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  FirstName: String,
  LastName: String,
  Email: String,
  Password: String
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
