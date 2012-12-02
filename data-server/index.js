var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var service = require("./service/service");

var handle = {
    "/map": requestHandlers.map,
    "/business": requestHandlers.getBiz,
    "/review": requestHandlers.postBiz
}

server.start(router.route, handle);
