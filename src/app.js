const express = require('express');
const path = require('path');

const app = express();

require('dotenv').config();
require('./config/passport');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
});

module.exports = app;
