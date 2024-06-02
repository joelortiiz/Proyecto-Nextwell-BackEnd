import { chromium } from "playwright";
console.log('Hola mundo');
const browser = await chromium.launch(
    { headless: true }
);

const page = await browser.newPage();

await page.goto('https://www.amazon.es/s?k=tarjetas+graficas&__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2X7GRFHBADDTS&sprefix=tarjetas+grafica%2Caps%2C126&ref=nb_sb_noss_2');

const productos = await page.$$eval('.s-card-container', (results) => {
     results.map(elemento => {
        const titulo = elemento.querySelector('h2')?.innerText;
        const precio = elemento.querySelector('.a-price-whole')?.innerText;
        const enlace = elemento.querySelector('.a-link-normal').getAttribute('href');

        return { titulo, precio, enlace };
    });
});

console.log(productos);
await browser.close();