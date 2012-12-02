var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {
    "/map": requestHandlers.map,
    "/biz": requestHandlers.getBiz,
    "/post": requestHandlers.postBiz
}

server.start(router.route, handle);
