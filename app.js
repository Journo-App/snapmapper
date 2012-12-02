'use strict';

var express = require('express')
  , connectAssets = require('connect-assets')
  , controllers = require('./controllers')
  , app
  ;

app = express();

app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  /*
  app.set('view engine', {layout: false});
  app.engine('html', {
    compile: function(str, options) {
      return function(locals) {
        return str;
      };
    }
  });
  */
  app.use(connectAssets());
  app.use(express.cookieParser());
  app.use(express.bodyParser());
});

// this attaches all our route handlers
controllers.init(app);

module.exports = app;
