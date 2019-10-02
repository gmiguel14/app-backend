const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
  email: String,
});

module.exports = mongoose.model('User', UsersSchema);
