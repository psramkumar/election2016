'use strict';

var express = require('express'),
router  = require('./router'),
app    = express();

app.use(express.static(require('path').join(__dirname, 'views')));
app.use('/', router);
var port = 5050;
require('http').createServer(app).listen(Number(port), function () {
  console.info("****************************************************************************");
  console.info('          MAPApp are running on port: ' + port);
});
