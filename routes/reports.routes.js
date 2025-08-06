const express = require('express');
const router = express.Router();
const reportsController = require('../controllers/reports.controller')

//route to run all tests
router.get('/report', reportsController.runAllRespots)

//new routes to run specific route report byId
router.get('/report/:id', reportsController.runReportById)

//new routes to run a batch of reports
router.get('/report/:from/:to', reportsController.runBatchReports)

module.exports = router;

