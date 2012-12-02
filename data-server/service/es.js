'use strict';

var esCli = require('elasticsearchclient');
  , config = require('../config')
  , es
  , serverOptions
  ;

serverOptions = {
    host: '50.116.14.106',
    port: 9200
};

es = new esCli(serverOptions);

module.exports = es;
