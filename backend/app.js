const express = require('exrpess');
const app = express();

app.use(express.json());

// ROUTE Imports

const product = require('./routes/productRoute');

app.use('/api/v1',product);

module.exports = app;