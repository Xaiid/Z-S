var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;

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
    //Is this user all ready playing ?
    //If something is not right done({});

    //otherwise
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
