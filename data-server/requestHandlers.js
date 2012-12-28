var http = require("http")
  , service = require("./service/service")
  ;

function getMap( httpResponse, postData ) {
  console.log( "requestHandlers.getMap: called with postData: " + postData );
  postData = JSON.parse( decodeURI( postData ) );
  // TODO: validateGetMap( postData );
  service.getMap( postData['loc'], postData['radius'], postData['filters'], 
          postData['query'], function( result ) {
            console.log( "requestHandlers.getMap: callback reached with result: " + result );
            respond( httpResponse, 200, result );
          });

}
exports.getMap = getMap;



function getBusiness( httpResponse, postData ) {
  console.log( "requestHandlers.getBusiness: called with postData: " + postData );
  postData = JSON.parse( decodeURI( postData ) );
  // TODO: validateGetBusiness( postData );
  service.getBusiness( businessId, function( result ) {
            console.log( "requestHandlers.getBusiness: callback reached with result: " + result );
            respond( httpResponse, 200, result );
          });
}
exports.getBusiness = getBusiness;



function postReview( httpResponse, postData ) {
  console.log( "requestHandlers.postReview: called with postData: " + postData );
  postData = JSON.parse( decodeURI( postData ) );
  // TODO: validatePostReview( postData );
  if( postData['review'] ) {
    service.postReview( businessId, postData['review'], function( result ) {
              console.log( "requestHandlers.postReview: callback reached with result: " + result );
              respond( httpResponse, 200, result );
            });
  }
  if( postData['rating'] ) {
    service.postRating( businessId, postData['rating'], function( result ) {
              console.log( "requestHandlers.postRating: callback reached with result: " + result );
              respond( httpResponse, 200, result );
            });
  }
}
exports.postReview = postReview;



function respond( httpResponse, code, content ) {
  var responseText;
  if( typeof( content ) != "string" ) {
    try {
      responseText = JSON.stringify( content );
    } catch( err ) {
      console.log( "requestHandlers.respond: " +
            "stringification of content failed: " + content );
      responseText = "";
    }
  }
  httpResponse.writeHead( code );
  httpResponse.write( responseText );
  httpResponse.end();
}
