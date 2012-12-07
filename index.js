var siteServer = require("./site/server")
  , dataServer = require("./data-server/server")
  , router = require("./data-server/router")
  , requestHandlers = require("./data-server/requestHandlers");

var handle = {
    "/getMap": requestHandlers.map,
    "/business": requestHandlers.getBiz,
    "/review": requestHandlers.postBiz
}

siteServer.start();

dataServer.start(router.route, handle);
