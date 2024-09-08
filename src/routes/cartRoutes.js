const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
    const { products } = req.body;
    res.json({
        message: 'agregar un nuevo carrito con los siguientes valores',
        valuesToAdd: products,
    });
});

router.post('/:cid/product/:pid', (req, res) => {
    const { cid, pid } = req.params;
    const { quantity } = req.body;

    res.json({
        message: `agregar al carrito con id ${cid} el producto con id ${pid} con cantidad igual a ${quantity}`,
    });
});

module.exports = router;
