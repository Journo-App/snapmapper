'use strict';

var config = require('./config')
  , app = require('./app')
  , http = require('http')
  ;

console.log('listening on port', config.port);
http.createServer(app).listen(config.port);
