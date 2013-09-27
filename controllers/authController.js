var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = {

  init: function(){

    passport.use(this.localStrategy());

    passport.serializeUser(function(user, done) {
      done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
      done(null, obj);
    });

  },

  localStrategy: function(req, res) {

    var username = req.body.username;
    var password = req.body.password;

    return new LocalStrategy(function (username, password, done) {
      if(error) {  return done(error); }
      return done(err, username);
    }); // new LocalStrategy

  },

  login: function(req, res){
    passport.authenticate('local', { successRedirect: '/',
                                     failureRedirect: '/login' });
  },

  logout: function(req, res){
    req.logout();
    res.redirect('/');
  }

};
