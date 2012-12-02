var confrodo = require('confrodo')
  , envConfigFile = __dirname + '/' + confrodo.env + '.json'
  , config
  ;

config = confrodo(envConfigFile, 'ARGV', 'ENV');

module.exports = config;
