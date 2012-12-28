var mongo = require('./mongo')
  , es = require('./es');


function getMap( locString, radius, filters, query, cb ) {
  var loc, locQuery, esQuery, esResults, done, getMapResult = {};

  console.log("service/getMap() called with loc = " + locString);

  loc = JSON.parse( locString );
/*
  // function to count completed calls - need 2
  done = (function() {
    var calls = 1;
    var numDone = 0;
    return function() {
      console.log("done " + numDone);
      if (++numDone == calls) {
        cb (getMapResult);
      }
    };
  })();
*/
  // call to mongo
  mongo.execute( function( err, db ) {
    var collection, locQuery, stream, result = [];
    if( err ) { return console.log("oh shit: " + err); }

    collection = db.collection("snapmapperC");
    locQuery = {
      loc: {
          '$near': loc,
          '$maxDistance': radius
      }
    }
    stream = collection.find( locQuery ).stream();
    stream.on('data', function( item ) {
      result.append( item );
    });
    stream.on('end', function() {
      cb( result );
    });

  })
 /* 
  * mongo callback:
  function(err, results) {
    if (err) { return "oh shit: " + err.message }
    console.log("msResults: " + JSON.stringify(results));
    getMapResult.mapResults = results;
    done();
  });
*/
/*
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
*/

}

exports.getMap = getMap;


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

exports.postReview = postReview;


function postRating( businessId, ratingsData, cb ) {
  options = {
    safe: true
  }
  db.collection('businessData').insert(docObj, options, cb);
}

exports.postRating = postRating;
