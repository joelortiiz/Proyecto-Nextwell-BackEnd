const express = require('express');
const { fetchGpuData, fetchCpuData, fetchSsdData } = require('../controllers/dataController');
const { getOSEditions } = require('../controllers/soController');
const router = express.Router();

router.get('/gpus', fetchGpuData);
router.get('/cpus', fetchCpuData);
router.get('/ssds', fetchSsdData);
router.get('/os', getOSEditions);


module.exports = router;


