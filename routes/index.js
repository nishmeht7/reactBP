const router = require('express').Router();

router.get('/home', function(req, res){
	res.send('Welcome to the world of heroNish!')
})


module.exports = router;