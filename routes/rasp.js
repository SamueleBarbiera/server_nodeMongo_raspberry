const express = require('express');

const {
  createData,
  readDataSamuel,
  readDataTony,
  updateDataByID,
} = require('../controllers/rasp_controller');

const router = express.Router();

router
  .post('/statoSamuel', createData)
  .post('/statoTony', createData)
  .put('/statoSamuel/:id', updateDataByID)
  .put('/statoTony/:id', updateDataByID)
  .get('/statoSamuel', readDataSamuel)
  .get('/statoTony', readDataTony)

module.exports = router;
