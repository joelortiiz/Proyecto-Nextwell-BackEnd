const osEditions = require('../data/soData.json');

const getOSEditions = (req, res) => {
    res.json(osEditions);
};

module.exports = {
    getOSEditions
};
