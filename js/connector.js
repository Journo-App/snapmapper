var dataServerAddress = "http://localhost:9999/";

function getMap( loc, radius, filters, query, cb ) {
  // set defaults
  if (!radius) {
    radius = 5;
  }
  data = {
    loc: loc,
    radius: radius,
    filters: filters,
    query: query
  }
  $.post( dataServerAddress + "getMap", data, cb )
}

function postReview( businessId, reviewText, cb ) {
  pass;
}
