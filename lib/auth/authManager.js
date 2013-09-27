var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var sockets       = require('../sockets/socket');

module.exports.init = function(){
  passport.use(this.localStrategy());
  return this;
};

module.exports.middleware = function(){

  return function(req, res, next){
    next();
    //Security logic
  };

};

module.exports.localStrategy = function(){
  return new LocalStrategy(function (username, password, done) {
    if(sockets.players[username]){ return done('User is allready playing'); }
    done(null, username, 'Welcome');
  });
};

module.exports.authenticate = function(strategy, options){
  options = options || {};

  return function(req, res, next) {

    passport.authenticate(strategy, options, function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login'); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.redirect('/play');
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
