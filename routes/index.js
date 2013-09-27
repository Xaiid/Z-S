//All the routes are specified in here
//var controller = require('mycontroller');

var authManager    = require('../lib/auth/authManager');
var navigation     = require('../controllers/navigation_controller');

module.exports = function(app){
  //app.method('route', controller.method.bind(controller));

  app.get('/',      navigation.index.bind(navigation));
  app.get('/login', navigation.login.bind(navigation));
  app.get('/game',  navigation.game.bind(navigation));

  app.post('/login', authManager.authenticate('local'));
  // app.get('/logout', authController.logout.bind(authController));
};
