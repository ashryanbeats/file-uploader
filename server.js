var express 	= require('express');
var bodyParser 	= require('body-parser');
var logger 		= require('morgan');
var app 		= express();
var path		= require('path');

app.use(logger('dev'));

//app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'app')));
//app.use(express.static('/bower_components', __dirname + '/bower_components'));

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