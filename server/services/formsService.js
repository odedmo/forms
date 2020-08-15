const baseFormModel = require('../data/models/BaseForm');
const formsListModel = require('../data/models/FormsList');

const getBaseForm = query => {
  return baseFormModel.find();
}

const getFormsList = () => {
  return formsListModel.find();
};

const updateBaseForm = ({ _id, name, budget }) => {
  return baseFormModel.findOneAndUpdate({ _id }, { name, budget });
};

const findFormsList = () => {
  return formsListModel.find();
};

const updateFormsList = (formsList, _id) => {
  return formsListModel.findOneAndUpdate({ _id }, { forms: formsList });
};

module.exports = {
  getBaseForm,
  getFormsList,
  updateBaseForm,
  findFormsList,
  updateFormsList
}
