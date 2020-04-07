var path = require('path');
var router = require('express').Router();

router.get('/notes', function(req, res) {
	res.send('../public/notes.html');
});
