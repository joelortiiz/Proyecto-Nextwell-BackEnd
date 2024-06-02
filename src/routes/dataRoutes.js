const express = require('express');
const { fetchGpuData, fetchCpuData, fetchSsdData } = require('../controllers/dataController');
const { getOSEditions } = require('../controllers/soController');
const router = express.Router();
const { getScrapedData } = require('../controllers/componentsController');

router.get('/gpus', fetchGpuData);
router.get('/cpus', fetchCpuData);
router.get('/ssds', fetchSsdData);
router.get('/os', getOSEditions);
router.get('/scrape/:category', getScrapedData);


module.exports = router;


