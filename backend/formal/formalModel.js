const mongoose = require('mongoose');

let FormalSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  category: {
    type: String,
  },
  municipality: {
    type: String,
  },
  subcategory: {
    type: String,
  },
  email: {
    type: String,
  },
  legalForm: {
    type: String,
  },
});

let Formal = mongoose.model('Formal', FormalSchema);
module.exports = Formal;
