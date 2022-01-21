const express = require('express');

const {
  createData,
  readData,
  updateDataByID,
} = require('../controllers/rasp_controller');

const router = express.Router();

router
  .post('/rasp/statoSamuel', createData)
  .get('/rasp/statoSamuel', readData)
  .put('/rasp/statoSamuel/:id', updateDataByID)
  .post('/rasp/statoTony', createData)
  .get('/rasp/statoTony', readData)
  .put('/rasp/statoTony/:id', updateDataByID)

module.exports = router;
