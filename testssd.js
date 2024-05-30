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

const main = async () => {
  try {
   
    const ssdData = await fetchData('https://www.techpowerup.com/ssd-specs/', '.drives-desktop-table tbody tr a');
    console.log('SSD Data:', ssdData);
  } catch (error) {
    console.error('Error:', error);
  }
};

main();
