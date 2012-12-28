"use strict";

var address = "http://50.116.14.106:80/";

function getMap( lat, lon, radius, filters, query, cb ) {
  var locString
    , url
    , data
    , loc;

  console.log("getMap called!");
  // set defaults
  if (!radius) {
    radius = 5;
  }
  loc = [lat, lon];
  locString = JSON.stringify( loc );
  data = {
    loc: locString,
    radius: radius,
    filters: filters,
    query: query
  }
  url = address + "getMap";
  $.get( url, data, cb )
}


function getBusiness( businessId, cb ) {
  pass;
}


function postReview( businessId, reviewText, cb ) {
  pass;
}
