const path = require('path');
const router = require('express').Router();

router.get('/notes', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/notes.html'));
});

<<<<<<< HEAD
  module.exports= router
=======
router.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
>>>>>>> 98532d6879a5f0df4c118efc4b9d1537724e3739
