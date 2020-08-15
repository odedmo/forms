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

// const addNew = (user) => {
//   return axios.post(`${baseUrl}`, user);
// }

// const updateForms = (forms) => {
//   return axios.put(`${baseUrl}/update`, user);
// }

export default {
  getBaseForm,
  getFormsList
};