const express = require('express');
const { fetchGpuData, fetchCpuData, fetchSsdData } = require('../controllers/dataController');
const { getOSEditions } = require('../controllers/soController');
const router = express.Router();

router.get('/gpus', fetchGpuData);
router.get('/cpus', fetchCpuData);
router.get('/ssds', fetchSsdData);
router.get('/os', getOSEditions);

router.delete('/ordenadores/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await Ordenador.findByIdAndDelete(id);
      res.status(200).json({ message: 'Ordenador eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error eliminando el ordenador' });
    }
  });

module.exports = router;


