const { getGpuData, getCpuData, getSsdData } = require('../services/scrappingService');
const fs = require('fs');

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
const getOSEditions = (req, res) => {
  const filePath = path.join(__dirname, './../data/soData.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    const osEditions = JSON.parse(data);
    res.json(osEditions);
  });
};


module.exports = {
  fetchGpuData,
  fetchCpuData,
  fetchSsdData,

};
