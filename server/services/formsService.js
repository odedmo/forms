const axios = require('axios');
const baseFormModel = require('../data/models/BaseForm');
const formsListModel = require('../data/models/FormsList');

const getBaseForm = query => {
  return baseFormModel.find();
}

const getFormsList = () => {
  return formsListModel.find();
};

const updateForms = ({ id }) => {
  return formsListModel({ id }).save();
};

module.exports = {
  getBaseForm,
  getFormsList,
  updateForms
}
