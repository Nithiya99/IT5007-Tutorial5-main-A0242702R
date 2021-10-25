const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: String,
  hp: String,
  timestamp: String,
});

module.exports = mongoose.model("Customer", customerSchema);
