const express = require('express');
const { fetchGpuData, fetchCpuData, fetchSsdData } = require('../controllers/dataController');
const { getOSEditions } = require('../controllers/soController');
const { getComponents } = require('../controllers/componentsController');
const { getProductos } = require('../controllers/productosController');

const router = express.Router();

router.get('/gpus', fetchGpuData);
router.get('/cpus', fetchCpuData);
router.get('/ssds', fetchSsdData);
router.get('/os', getOSEditions);
router.get('/components', getComponents);
router.get('/productos', getProductos);
//router.get('/scrape/:category', getScrapedData);


module.exports = router;


