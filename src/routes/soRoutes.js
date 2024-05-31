const express = require('express');
const router = express.Router();
const { getOSEditions } = require('../controllers/osController');

router.get('/os-editions', getOSEditions);

module.exports = router;
