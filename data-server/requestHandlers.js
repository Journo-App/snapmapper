var http = require("http")
  , service = require("./service/service");

function map( response, postData ) {
  console.log("map called with postData = " + postData);
  postData = JSON.parse(decodeURI(postData));
  service.getMap( postData['loc'], postData['radius'], postData['filters'], 
          postData['query'], function(result) {
            console.log("callback reached");
            response.writeHead(200);
            response.write( "result: " + result );
            response.end();
          });

}

exports.map = map;

