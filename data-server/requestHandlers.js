var http = require("http")

function map( response, postData ) {
  getMap( postData['loc'], postData['radius'], postData['filters'], 
          postData['query'], function(result) {
            response.writeHead(200);
            response.write( result );
            response.end();
          });

}

exports.map = map;

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

exports.get = get
