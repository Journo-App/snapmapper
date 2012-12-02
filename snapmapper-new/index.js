var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {
    "/": requestHandlers.start,
    "get": requestHandlers.get
}

server.start(router.route, handle);
