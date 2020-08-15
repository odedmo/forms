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
    const formsDoc = await formsService.getFormsList();
    res.json(ResponseHelper.createAPIResponse(formsDoc[0].forms));
  } catch (error) {
    res.status(500).json(ResponseHelper.createAPIError(error));
  }
});

router.put('/update-base', async (req, res) => {
  try {
    const { _id, name, budget } = req.body;
    await formsService.updateBaseForm({ _id, name, budget });
    res.json(ResponseHelper.createAPIResponse());
  } catch (error) {
    res.status(500).json(ResponseHelper.createAPIError(error));
  }
});

router.put('/update-forms', async (req, res) => {
  try {
    const updatedFormsList = req.body;
    const formsDoc = await formsService.findFormsList();
    await formsService.updateFormsList(updatedFormsList, formsDoc[0]._id);
    res.json(ResponseHelper.createAPIResponse());
  } catch (error) {
    res.status(500).json(ResponseHelper.createAPIError(error));
  }
});

module.exports = (app) => {
  app.use('/v1/forms', router);
}
