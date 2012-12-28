
/**
 * Module dependencies.
 */

var express = require('express')
  , getMap = require('./routes/getMap')
  , getBusiness = require('./routes/getBusiness')
  , postReview = require('./routes/postReview')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', 80);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/map', getMap.getMap);
app.get('/business', getBusiness.getBusiness);
app.post('/review', postReview.postReview);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
