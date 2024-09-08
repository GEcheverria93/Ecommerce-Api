const fS = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');

const readProducts = () => {
    const data = fS.readFileSync(productsFilePath, 'utf-8');

    return JSON.parse(data);
};

const getAllProducts = (req, res) => {
    const products = readProducts();
    const limit = parseInt(req.query.limit, 10);
    // eslint-disable-next-line no-restricted-globals
    if (limit && !isNaN(limit)) {
        return res.json(products.slice(0, limit));
    }
    return res.json(products);
};

module.exports = { readProducts, getAllProducts };
