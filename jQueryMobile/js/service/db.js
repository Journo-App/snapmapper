'use strict';

var mongoskin = require('mongoskin')
  , config = require('../config')
  , db
  ;

db = mongoskin.db(config.username + ":" +  config.password + "@" 
        + config.mongourl + ":" + config.port);

module.exports = db;
