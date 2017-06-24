const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const apiRoutes = require('./routes/index.js');
const path = require('path');
const router = require('express').Router();

//morgan middleware
app.use(morgan('dev'));

//implementing body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes);

//posting all files in public folder
app.use(express.static('public'));

//all other routes
app.get('/*', function(req, res){
	res.sendFile(path.resolve(__dirname, 'browser/index.html'));
})

//listening on port 3005
const server = app.listen(3005, function(){
		console.log('listening on 3005');
})

