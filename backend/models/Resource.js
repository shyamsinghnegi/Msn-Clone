const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: true,
    index: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Resource', resourceSchema);