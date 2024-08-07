const express = require('express');
const cors = require('cors');
const worldBankRoutes = require('./routes/worldBank');
const fredRoutes = require('./routes/fred');
const imfRoutes = require('./routes/imf');
const eurostatRoutes = require('./routes/eurostat');
const errorHandler = require('./utils/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/worldbank', worldBankRoutes);
app.use('/api/fred', fredRoutes);
app.use('/api/imf', imfRoutes);
app.use('/api/eurostat', eurostatRoutes);

app.use(errorHandler);

module.exports = app;