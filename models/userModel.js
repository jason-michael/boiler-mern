const mongoose = require('mongoose');
const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  phone: String,
  email: {
    type: String,
    required: true
  }
}))

module.exports = { User };
