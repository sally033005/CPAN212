const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_Name: {
    type: String,
    required: true,
    trim: true
  },
  last_Name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address.']
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
