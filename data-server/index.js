var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {
    "/getMap": requestHandlers.map,
    "/business": requestHandlers.getBiz,
    "/review": requestHandlers.postBiz
}

server.start(router.route, handle);
