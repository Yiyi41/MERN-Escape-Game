const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  {
    firstname: String,
    name: String,
    birthdate: Date,
    email: String,
    token: String,
    hash: String,
    salt: String,
    history: Array,
  }
  // ,
  // { versionKey: false } c'est une option que pour l'écriture avec Schema
);

module.exports = User;
