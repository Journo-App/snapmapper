var db = require('db')
  , es = require('es');


function getMap( loc, radius, filters, query, cb ) {
  var locQuery, esQuery, esResults;

  locQuery = {
    loc: {
        $near: loc,
        $maxDistance: radius
    }
  }
  db.places.find(locQuery, cb);

  esQuery = {
    review = query
  }
  esResults = '';
  es.search('reviews', 'text', esQuery)
    .on('data', function(data) {
        results += JSON.parse(data);
    })
    .on('done', function() {
        console.log(JSON.parse(results));
    })
    .exec();
}


function postReview( businessId, reviewText, cb ) {
  esPost = {
    id = businessId,
    review = reviewText
  }
  es.index('reviews', 'text', esPost)
    .on('data', function(data) {
        console.log(data)
    })
    .exec();
}


function postRating( businessId, ratingsData, cb ) {
  options = {
    safe: true
  }
  db.collection('businessData').insert(docObj, options, cb);
}
