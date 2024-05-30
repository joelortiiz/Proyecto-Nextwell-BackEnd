// src/controllers/gpuController.js
const { fetchGpuData } = require('../services/gpuService');

const getGpus = async (req, res) => {
    try {
        const gpus = await fetchGpuData();
        res.json(gpus);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error scraping data');
    }
};

module.exports = { getGpus };
