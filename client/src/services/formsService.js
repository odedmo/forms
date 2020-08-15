import axios from 'axios';

const baseUrl = 'http://localhost:3000/v1/forms';

const getBaseForm = async () => {
  try {
    const {data} = await axios.get(`${baseUrl}/base`);
    return data.data[0];
  } catch (error) {
    console.log(error);
  }
};

const getFormsList = async () => {
  try {
    const {data} = await axios.get(`${baseUrl}/forms`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const updateForms = (formsData) => {
  try {
    axios.put(`${baseUrl}/update-base`, formsData.baseForm);
    axios.put(`${baseUrl}/update-forms`, formsData.forms);
  } catch (error) {
    console.log(error);
  }
}

export default {
  getBaseForm,
  getFormsList,
  updateForms
}