var express 	= require('express');
var bodyParser 	= require('body-parser');
var logger 		= require('morgan');
var app 		= express();
var path		= require('path');

app.use(logger('dev'));

var bowerPath = path.join(__dirname, './bower_components');
var publicPath = path.join(__dirname, './public');
var appPath = path.join(__dirname, './app');

app.use(express.static(appPath));
app.use(express.static(bowerPath));
app.use(express.static(publicPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./app/routes/'));

app.use(function(req, res, next) {
	var err = new Error('Not found');
	err.status = 404;
	next(err);
});

app.use(function(err, req, res, next) {
	console.error(err);
	res.status(err.status || 500).send({error: err});
});

var port = 1980;
app.listen(port, function() {
	console.log('Listening on', port);
});