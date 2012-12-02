http = require( "http" ),
url = require("url");

function start( route, handle ) {

    function onRequest( request, response ) {
	    var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        
        request.setEncoding("utf8");

        request.addListener("data", function( postDataChunk ) {
            postData += postDataChunk;
            console.log("Received POST data chunk '" + postDataChunk + "'.");
        });

        request.addListener("end", function() {
            route( pathname, response, postData, handle);
        });

    }
    http.createServer( onRequest ).listen(8080);
    console.log("Server running on 8080");
}

exports.start = start;