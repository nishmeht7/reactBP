const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const apiRoutes = require('./routes/index.js');

//morgan middleware
app.use(morgan('dev'));

//implementing body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes);

//posting all files in public folder
app.use(express.static('public'));
