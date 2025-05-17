const mongoose = require('mongoose');

const papaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  name_papa: { type: String, required: true },
  country: { type: String },
  votes: { type: Number, default: 0 }
}, {
  timestamps: true
});

module.exports = mongoose.model('Papa', papaSchema);