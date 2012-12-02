var http = require("http")
  , fs = require('fs')
  , path = require('path');

function start( response ) {
  fs.readFile('index.html', function( err, content ) {
    if (err) {
      response.writeHead(500);
      response.end();
    } else {
      response.writeHead(200);
      response.end(content, 'utf-8');
    }
  });
}

function get( response, pathname ) {
  path.exists( pathname, function(exists) {
      if (exists) {
        fs.readFile(pathname, function(error, content) {
          if (error) {
            response.writeHead(500);
            response.end();
          } else {
            response.writeHead(200);
            response.end(content, 'utf-8');
          }
        });
      } else {
        response.writeHead(404);
        response.end();
      }
  });
}

exports.start = start;
exports.get = get;

