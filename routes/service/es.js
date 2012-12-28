'use strict';

var esCli = require('elasticsearchclient')
  , config = require('../../config')
  , es
  , serverOptions
  ;

serverOptions = {
    host: '127.0.0.1',
    port: 9200
};

es = new esCli(serverOptions);

module.exports = es;
