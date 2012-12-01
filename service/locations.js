'use strict';

// mock out your functions in service
// define what parameters there will be, and what data will 
// be returned
exports.myFunction = function(param1, param2, cb) {

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
