var db = require('./db')
  , es = require('./es');


function getMap( loc, radius, filters, query, cb ) {
  var locQuery, esQuery, esResults, done, getMapResult = {};

  // function to count completed calls - need 2
  done = (function() {
    var calls = 2;
    var numDone = 0;
    return function() {
      if (++numDone == calls) {
        console.log("done");
        cb (getMapResult);
      }
    };
  })();

  // call to mongo
  locQuery = {
    loc: {
        geoNear: "snapmapperC",
        near: loc,
        maxDistance: radius
    }
  }
  db.executeDbCommand(locQuery, function(err, results) {
    if (err) { return "oh shit: " + err.message }
    console.log("msResults: " + JSON.stringify(results));
    getMapResult.mapResults = results;
    done();
  });

  // call to es
  esQuery = {
    review: query
  }
  esResults = '';
  es.search('reviews', 'text', esQuery)
    .on('data', function(data) {
        esResults += data;
    })
    .on('done', function() {
        console.log("esResults: " + JSON.stringify(esResults));
        getMapResult.searchResults = esResults;
        done();
    })
    .exec();
}

module.exports.getMap = getMap;


function postReview( businessId, reviewText, cb ) {
  esPost = {
    id: businessId,
    review: reviewText
  }
  es.index('reviews', 'text', esPost)
    .on('data', function(data) {
        console.log("es data: " + data)
    })
    .exec();
}

module.exports.postReview = postReview;


function postRating( businessId, ratingsData, cb ) {
  options = {
    safe: true
  }
  db.collection('businessData').insert(docObj, options, cb);
}

module.exports.postRating = postRating;
