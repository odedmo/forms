const express = require('express');

const formsService = require('../../services/formsService');
const ResponseHelper = require('../../services/responseHelper');
const router = express.Router();

router.get('/base', async (req, res) => {
  try {
    const baseForm = await formsService.getBaseForm();
    res.json(ResponseHelper.createAPIResponse(baseForm));
  } catch (error) {
    res.status(500).json(ResponseHelper.createAPIError(error));
  }
});

router.get('/forms', async (req, res) => {
  try {
    const forms = await formsService.getFormsList();
    res.json(ResponseHelper.createAPIResponse(forms));
  } catch (error) {
    res.status(500).json(ResponseHelper.createAPIError(error));
  }
});

router.post('/update', async (req, res) => {
  // const { id } = req.body;
});

module.exports = (app) => {
  app.use('/v1/forms', router);
}
