function route( pathname, response, postData, handle ) {
    console.log( "About to route a request for " + pathname );
    if( typeof(handle[pathname]) == "function" ) {
      handle[pathname](response, postData);
    } else {
        response.writeHead(404);
        response.write("Unknown request.");
        response.end();
    }

}

exports.route = route;
