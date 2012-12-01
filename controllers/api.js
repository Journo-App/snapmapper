'use strict';

exports.init = function(app) {
  app.get('/api/test', getTest);
};

function getTest(req, res, next) {
  // req is the request, contains cookies, querystring
  // params, body json
  // 
  // res is the response, for api functions you always want to return
  // json
  // 
  // next is the "next" function to run after this (error handler usually)
  // 
  // calling res.json({my:'value'}) returns json and closes the connection
  // 
  // calling next(new Error('wrong value')) calls an error handler

  res.json({
    test: 'value'
  });
};
