var mongoose = require('mongoose');

var Item = mongoose.model('Item', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  approved: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = {
  Item: Item,
  User: User
};
