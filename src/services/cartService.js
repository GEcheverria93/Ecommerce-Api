/* eslint-disable node/no-unsupported-features/es-syntax */
const fS = require('fs');
const path = require('path');

const cartsFilePath = path.join(__dirname, '../data/carts.json');

const readCarts = () => {
    const data = fS.readFileSync(cartsFilePath, 'utf-8');

    return JSON.parse(data);
};

const writeCarts = (carts) => {
    fS.writeFileSync(cartsFilePath, JSON.stringify(carts, null, 2));
};
const generateNewCartId = (carts) =>
    Math.max(...carts.map((c) => Number(c.id)), 0) + 1;

const addNewCart = (req, res) => {
    const { products } = req.body;
    const carts = readCarts();
    const newCart = {
        id: generateNewCartId(carts),
        products: products || [],
    };
    carts.push(newCart);
    writeCarts(carts);
    return res.status(201).json(newCart);
};

const getProductsByCartId = (req, res) => {
    const { cid } = req.params;
    const carts = readCarts();
    const cart = carts.find((c) => c.id === Number(cid));
    if (!cart) {
        return res.status(404).json({ message: 'carrito no encontrado' });
    }
    return res.json(cart.products);
};

module.exports = {
    readCarts,
    writeCarts,
    generateNewCartId,
    addNewCart,
    getProductsByCartId,
};
