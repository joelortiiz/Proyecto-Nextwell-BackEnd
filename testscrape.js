const puppeteer = require('puppeteer');

const scrapeGpuData = async () => {
    // Iniciar el navegador Puppeteer
    const browser = await puppeteer.launch();

    try {
        // Abrir una nueva página
        const page = await browser.newPage();

        // Navegar a la página de TechPowerUp
        await page.goto('https://www.techpowerup.com/gpu-specs/', { waitUntil: 'networkidle0' });

        // Esperar a que la tabla de GPUs esté presente en la página
        await page.waitForSelector('.processors tbody tr:first-child', { timeout: 10000 });

        // Extraer los elementos de la tabla de GPUs
        const gpuElements = await page.evaluate(() => {
            return [...document.querySelectorAll('.processors tbody tr')];
        });

        console.log('GPU elements:', gpuElements);

        // Extraer los nombres de las GPUs
        const gpuNames = gpuElements.map(element => {
            const name = element.querySelector('td a').innerText.trim();
            return name;
        });

        console.log('GPU names:', gpuNames);

        return gpuNames;
    } catch (error) {
        console.error('Error during scraping:', error);
        throw error;
    } finally {
        // Cerrar el navegador Puppeteer al finalizar
        await browser.close();
    }
};

// Ejecutar la función de scraping y manejar los resultados
scrapeGpuData()
    .then(gpuNames => {
        console.log('Nombres de GPUs obtenidos:');
        console.log(gpuNames);
    })
    .catch(error => console.error('Error during scraping:', error));
