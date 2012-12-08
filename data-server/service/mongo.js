'use strict';

var MongoClient = require('mongodb').MongoClient
  , config = require('../config')
  , url
  ;

url = "mongodb://" + config.username + ":" +  config.password + "@" 
      + config.mongourl + ":" + config.port + "/snapmapper";

console.log(url);

function execute( fcn ) {
  MongoClient.connect( url, fcn );
}

module.exports.execute = execute;
