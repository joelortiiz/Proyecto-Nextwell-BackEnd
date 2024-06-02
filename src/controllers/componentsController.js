const components = require("./../data/components.json");  

const getComponents = (req, res) => {
  res.json(components);
};

module.exports = {
  getComponents
};
