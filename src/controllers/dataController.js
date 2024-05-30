const { getGpuData, getCpuData, getSsdData } = require('../services/scrappingService');

const fetchGpuData = async (req, res) => {
  try {
    const data = await getGpuData();
    res.json(data);
  } catch (error) {
    console.error('Error fetching GPU data:', error);
    res.status(500).json({ error: 'Error fetching GPU data' });
  }
};

const fetchCpuData = async (req, res) => {
  try {
    const data = await getCpuData();
    res.json(data);
  } catch (error) {
    console.error('Error fetching CPU data:', error);
    res.status(500).json({ error: 'Error fetching CPU data' });
  }
};

const fetchSsdData = async (req, res) => {
  try {
    const data = await getSsdData();
    res.json(data);
  } catch (error) {
    console.error('Error fetching SSD data:', error);
    res.status(500).json({ error: 'Error fetching SSD data' });
  }
};

module.exports = {
  fetchGpuData,
  fetchCpuData,
  fetchSsdData
};
