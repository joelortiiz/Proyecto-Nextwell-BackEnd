const { scrapeCategory } = require('../services/scrappingComponents');

async function getScrapedData(req, res) {
  const category = req.params.category;

  try {
    const productos = await scrapeCategory(category);
    res.json(productos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { getScrapedData };
