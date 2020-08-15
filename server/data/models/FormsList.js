const mongoose = require('mongoose');

const formsListSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  name: {
    type: String
  },
  budget: {
    type: Number
  },
  inheritance: {
    type: Boolean,
    default: false
  }
}, { collection: "FormsList" });

module.exports = mongoose.model('FormsList', formsListSchema);