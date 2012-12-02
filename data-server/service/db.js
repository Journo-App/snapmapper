'use strict';

var mongoskin = require('mongoskin')
  , config = require('../config')
  , db
  , url
  ;

url = config.username + ":" +  config.password + "@" 
      + config.mongourl + ":" + config.port + "/snapmapper";

console.log(url);
db = mongoskin.db(url, {safe:false});
module.exports = db;
