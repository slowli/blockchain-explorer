var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// Initialize application
var app = express();

// Configure parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Set path to static files
app.use(express.static(__dirname + '/'));

// Activate routers
var api = require('./routes/api');
app.use('/api', api);

// Single Page Application entry point
app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.listen(8290);
