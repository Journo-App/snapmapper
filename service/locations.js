'use strict';

// mock out your functions in service
// define what parameters there will be, and what data will 
// be returned
exports.getMap = function(loc, radius, filters, query, cb) {

  var result = {
    places: [
      {
        name: 'Some place',
        rating: 4,
        reviews: [
          {
            summary: 'It is pretty neat'
          }
        ]
      }
    ]
  };
  return cb(null, result);
}

