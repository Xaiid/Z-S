var passport      = require('passport');
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

var authManager = require('./lib/auth/authManager').init();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());
app.use(authManager.middleware());
app.use(app.router);
app.use(express.methodOverride());
app.use(authManager.notFound());

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

require('./routes/index')(app);

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var io = require('socket.io').listen(server);
require('./lib/sockets/socket').init(io);
