// user model

var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  image_url: String,
  email: String
});

module.exports = mongoose.model('User', UserSchema);
