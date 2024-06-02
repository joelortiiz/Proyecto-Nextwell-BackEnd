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

const getGpuData = () => fetchData('https://www.amazon.es/s?k=tarjetas+graficas&__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2X7GRFHBADDTS&sprefix=tarjetas+grafica%2Caps%2C126&ref=nb_sb_noss_2', '.s-card-container h2');


const getCpuData = () => fetchData('https://www.techpowerup.com/cpu-specs/', '.plp-product-grid a');
const getSsdData = () => fetchData('https://www.techpowerup.com/ssd-specs/', '.drives-desktop-table tbody tr td .drive-title');

module.exports = {
  getGpuData,
  getCpuData,
  getSsdData
};

console.log(getGpuData());