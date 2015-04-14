var router = require('express').Router();
var path = require('path');
//var models = require('../models');

router.get('/', function(req, res, next) {

	console.log("You're at /");
	res.sendFile(path.join(__dirname, "../views/index.html"));
});

module.exports = router;