const express = require('express');
const {
    getAllProducts,
    getProduct,
    addNewProduct,
    updateProduct,
} = require('../services/productService');

const router = express.Router();

router.get('/', getAllProducts);

router.get('/:pid', getProduct);

router.post('/', addNewProduct);

router.put('/:pid', updateProduct);

router.delete('/:pid', (req, res) => {
    const { pid } = req.params;
    res.json({
        message: `eliminar el producto con id ${pid}`,
    });
});

module.exports = router;
