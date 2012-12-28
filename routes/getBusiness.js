var http = require("http")
  , service = require("./service/service")
  , lib = require("./lib")
  ;

function getBusiness( httpResponse, postData ) {
  console.log( "requestHandlers.getBusiness: called with postData: " + postData );
  postData = JSON.parse( decodeURI( postData ) );
  // TODO: validateGetBusiness( postData );
  service.getBusiness( businessId, function( result ) {
            console.log( "requestHandlers.getBusiness: callback reached with result: " + result );
            lib.respond( httpResponse, 200, result );
          });
}
exports.getBusiness = getBusiness;

