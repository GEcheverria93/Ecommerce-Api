const express = require('express');
const {
    getAllProducts,
    getProduct,
    addNewProduct,
} = require('../services/productService');

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:pid', getProduct);

router.post('/', addNewProduct);

router.put('/:pid', (req, res) => {
    const { pid } = req.params;
    res.json({
        message: `actualizar el producto con id ${pid}`,
        // eslint-disable-next-line node/no-unsupported-features/es-syntax
        newValues: { ...req.body },
    });
});

router.delete('/:pid', (req, res) => {
    const { pid } = req.params;
    res.json({
        message: `eliminar el producto con id ${pid}`,
    });
});

module.exports = router;
