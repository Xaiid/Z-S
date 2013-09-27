module.exports = {
  index: function(req, res){
    res.render('navigation/index');
  },

  login: function(req, res){
    res.render('navigation/login');
  },

  game: function(req, res){
    res.render('navigation/game');
  }
};
