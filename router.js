
module.exports = (function() {
	'use strict';
	var router = require('express')(),
	request = require('request');

	console.info("Config Routers");
	router.get('/',function(req, res) {
		console.info(new Date(),'Application Path: ', req.path);
		res.sendFile(require('path').resolve('views/index.html'));
	});

	router.get('/result',function(req, res) {
		console.info(new Date(),'Application Path: ', req.path);
		var result = "";
		require('http').get('http://election.dinamalar.com/res/tnres.txt', function(resp) {
			var body = '';
			resp.on('data', function(d) {
				body += d;
			});
			resp.on('end', function() {
				//var parsed = JSON.parse(body);
				/*callback({
				email: parsed.email,
				password: parsed.pass
			});*/
			result = body.split(",");
			res.send(body);
			res.end();
			console.info(result);
		});
	});

	//	res.setHeader('Content-Type', 'application/json');

});

return router;
})();
