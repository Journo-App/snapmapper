'use strict';

exports.init = function(app) {
  app.get('/', showRoot);
};

function showRoot(req, res, next) {
  // this will render a jade template
  // any json you pass will show up as a view parameter
  // I don't think you'll be using too much of this as
  // you'll probably just be serving a static page that
  // includes all the javascript to run the app
  // 
  // 
  res.render('index', {
    title: 'value'
  });
}
