const { chromium } = require('playwright');

const categorias = {
  'placas-base': 'placas-base',
  'graficas': 'tarjetas-graficas',
  'procesadores': 'procesadores',
  'ssd': 'discos-duros-ssd',
  'memorias-ram': 'memoria-ram',
  'torres': 'torres',
};

async function scrapeCategory(category) {
  const categoriaUrl = categorias[category];

  if (!categoriaUrl) {
    throw new Error('Categoría no válida');
  }

  // Lanzar un navegador
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navegar a la página de la categoría en PC Componentes
  await page.goto(`https://www.pccomponentes.com/${categoriaUrl}`);

  // Esperar a que la página cargue los resultados
  await page.waitForSelector('.c-product-card__content');

  // Extraer información de los productos
  const productos = await page.$$eval('.c-product-card__content', elementos => {
    return elementos.map(elemento => {
      const titulo = elemento.querySelector('.c-product-card__title')?.innerText;
      const precio = elemento.querySelector('.c-product-card__prices-actual')?.innerText;
      const enlace = elemento.querySelector('.c-product-card__title a')?.href;

      return { titulo, precio, enlace };
    });
  });

  // Cerrar el navegador
  await browser.close();

  return productos;
}

module.exports = { scrapeCategory };
