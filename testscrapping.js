// testScraping.js
const axios = require('axios');
const cheerio = require('cheerio');

const fetchGpuData = async () => {
    try {
        const response = await axios.get('https://www.techpowerup.com/gpu-specs/');
        const html = response.data;
        const $ = cheerio.load(html);
        const gpus = [];

        $('.processors tbody tr').each((index, element) => {
            const name = $(element).find('td a').text().trim();
            if (name) {
                gpus.push(name);
            }
        });

        return gpus;
    } catch (error) {
        console.error('Error fetching GPU data:', error);
        throw error;
    }
};

fetchGpuData().then(gpus => console.log(gpus)).catch(error => console.error(error));
