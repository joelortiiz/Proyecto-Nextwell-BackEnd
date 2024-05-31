const axios = require('axios');
const cheerio = require('cheerio');

const fetchData = async (url, selector) => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const data = $(selector).map((index, element) => $(element).text()).get();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const getGpuData = () => fetchData('https://www.techpowerup.com/gpu-specs/', '.processors tbody tr td a');
const getCpuData = () => fetchData('https://www.techpowerup.com/cpu-specs/', '.processors tbody tr td a');
const getSsdData = () => fetchData('https://www.techpowerup.com/ssd-specs/', '.drives-desktop-table tbody tr td .drive-title');

module.exports = {
  getGpuData,
  getCpuData,
  getSsdData
};
