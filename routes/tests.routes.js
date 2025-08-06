const express = require('express');
const router = express.Router();
const testsController = require('../controllers/tests.controller')

//route to run all tests
router.get('/run-tests', testsController.runAlltests)

//new routes to run specific route
router.get('/run/:id', testsController.runTestById)

//new routes to run a batch of tests
router.get('/run/:from/:to', testsController.runBatchTests)

module.exports = router;

