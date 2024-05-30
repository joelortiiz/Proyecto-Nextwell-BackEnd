// src/services/gpuService.js
const axios = require('axios');
const cheerio = require('cheerio');

const fetchGpuData = async () => {
    try {
        const response = await axios.get('https://www.techpowerup.com/gpu-specs/');
        const html = response.data;
        const $ = cheerio.load(html);
        const gpus = [];

        // Asegúrate de que el selector coincide con la estructura HTML actual del sitio web
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

module.exports = { fetchGpuData };
