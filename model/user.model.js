const mongoose = require("mongoose");

// Define the schema first
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create the model after the schema definition
const User = mongoose.model("User", userSchema);

module.exports = User;
