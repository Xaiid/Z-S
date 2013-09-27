var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var sockets       = require('../sockets/socket');

module.exports.init = function(){
  passport.use(this.localStrategy());

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

  return this;
};

module.exports.middleware = function(){

  var passportInitialize  = passport.initialize();
  var passportSession     = passport.session();

  return function(req, res, next) {

    passportInitialize(req, res, function(err) {
      if( err) { return next(err); }

      passportSession(req, res, function(err) {
        if( err) { return next(err); }
      });
    });

    next();
  };
};

module.exports.localStrategy = function(){
  return new LocalStrategy(function (username, password, done) {
    if(sockets.players[username]){ return done(null, false, "Username has already taken"); }
    done(null, username, 'Welcome');
  });
};

module.exports.authenticate = function(strategy, options){
  options = options || {};
  return function(req, res, next) {

    passport.authenticate(strategy, options, function(err, user, info) {
      if (err) { return next(err); }
      if(!user && info){  return res.send(400, info);}
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.send(200, "Ready to play!!");
      });
    })(req, res, next);

  };

};

module.exports.logout = function(){
  return function(req, res, next) {
    req.logout();
    res.redirect('/'); 
  };
};

module.exports.notFound = function(){
  return function(req, res, next){
    res.render(404, '404');
  };
};
