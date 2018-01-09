var mongoose = require('mongoose');
// new User model
// email - require it, trim it - set type - set min length of 1

var User = mongoose.model('User', {
  text: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

module.exports = { User };
