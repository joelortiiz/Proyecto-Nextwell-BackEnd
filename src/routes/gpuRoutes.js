// src/routes/gpuRoutes.js
const express = require('express');
const { getGpus } = require('../controllers/gpuController');

const router = express.Router();

router.get('/', getGpus);

module.exports = router;
