var siteServer = require("./site/server")
  , dataServer = require("./data-server/server")
  , router = require("./data-server/router")
  , requestHandlers = require("./data-server/requestHandlers");

var handle = {
    "/getMap": requestHandlers.getMap,
    "/business": requestHandlers.getBusiness,
    "/review": requestHandlers.postReview
}

siteServer.start();

dataServer.start(router.route, handle);
