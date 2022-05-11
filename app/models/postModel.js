const mongoose = require('mongoose');

const Post = mongoose.Schema({
  nama: {
    type: String,
    // required: true,
  },
  body: {
    type: String,
    // required: true,
  },
  published: {
    type: Boolean,
  },
  // timestamps: true,
});

module.exports = mongoose.model('Post', Post);
