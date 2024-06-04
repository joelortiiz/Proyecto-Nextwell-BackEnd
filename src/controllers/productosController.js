const productos = require("../data/productos.json");  

const getProductos = (req, res) => {
  res.json(productos);
};

module.exports = {
    getProductos
};
