var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = {

  init: function(){

    passport.serializeUser(function(user, done) {
      done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
      done(null, obj);
    });

  },

  login: function(req, res) {

    var username = req.body.username;
    var password = req.body.password;

    return new LocalStrategy(function (username, password, done) {
      if(error) {  return done(error); }
      return done(err, username);
    }); // new LocalStrategy

  },

  logout: function(req, res){
    req.logout();
    res.redirect('/');
  }

};
