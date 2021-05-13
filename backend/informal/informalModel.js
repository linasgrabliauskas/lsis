const mongoose = require('mongoose');

let InformalSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  programAccreditation: {
    type: String,
  },
  programProvider: {
    type: String,
  },
  programMunicipality: {
    type: String,
  },
  programAddress: {
    type: String,
  },
  programStart: {
    type: String,
  },
});

let Informal = mongoose.model('Informal', InformalSchema);
module.exports = Informal;
