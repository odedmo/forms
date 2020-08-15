const mongoose = require('mongoose');

const baseFormSchema = new mongoose.Schema({
  name: {
    type: String
  },
  budget: {
    type: Number
  },
}, { collection: "BaseForm" });

module.exports = mongoose.model('BaseForm', baseFormSchema);