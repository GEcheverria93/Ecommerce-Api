const express = require('express');
const { addNewCart, getProductsByCartId } = require('../services/cartService');

const router = express.Router();

router.post('/', addNewCart);

router.get('/:cid', getProductsByCartId);

router.post('/:cid/product/:pid', (req, res) => {
    const { cid, pid } = req.params;
    const { quantity } = req.body;

    res.json({
        message: `agregar al carrito con id ${cid} el producto con id ${pid} con cantidad igual a ${quantity}`,
    });
});

module.exports = router;
