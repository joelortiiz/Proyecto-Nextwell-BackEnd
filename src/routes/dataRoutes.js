const express = require('express');
const { fetchGpuData, fetchCpuData, fetchSsdData } = require('../controllers/dataController');

const router = express.Router();

router.get('/gpus', fetchGpuData);
router.get('/cpus', fetchCpuData);
router.get('/ssds', fetchSsdData);

module.exports = router;
