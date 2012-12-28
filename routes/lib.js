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
exports.respond = respond;
