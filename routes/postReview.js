var http = require("http")
  , service = require("./service/service")
  , lib = require("./lib")
  ;

function postReview( httpResponse, postData ) {
  console.log( "requestHandlers.postReview: called with postData: " + postData );
  postData = JSON.parse( decodeURI( postData ) );
  // TODO: validatePostReview( postData );
  if( postData['review'] ) {
    service.postReview( businessId, postData['review'], function( result ) {
              console.log( "requestHandlers.postReview: callback reached with result: " + result );
              lib.respond( httpResponse, 200, result );
            });
  }
  if( postData['rating'] ) {
    service.postRating( businessId, postData['rating'], function( result ) {
              console.log( "requestHandlers.postRating: callback reached with result: " + result );
              lib.respond( httpResponse, 200, result );
            });
  }
}
exports.postReview = postReview;


