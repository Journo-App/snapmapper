var http = require("http")
  , service = require("./service/service")
  , lib = require("./lib")
  ;


function getMap( httpResponse, postData ) {
  console.log( "requestHandlers.getMap: called with postData: " + postData );
  postData = JSON.parse( decodeURI( postData ) );
  // TODO: validateGetMap( postData );
  service.getMap( postData['loc'], postData['radius'], postData['filters'], 
          postData['query'], function( result ) {
            console.log( "requestHandlers.getMap: callback reached with result: " + result );
            lib.respond( httpResponse, 200, result );
          });

}
exports.getMap = getMap;



