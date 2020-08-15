const mongoose = require('mongoose');

const formsListSchema = new mongoose.Schema({
  forms: Array
}, { collection: "FormsList" });

module.exports = mongoose.model('FormsList', formsListSchema);