const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.use('/api/carts', cartRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('hola');
});

module.exports = app;
