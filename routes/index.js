//All the routes are specified in here
//var controller = require('mycontroller');

var authController = require('../controllers/authController');
var navigation     = require('../controllers/navigation_controller');

module.exports = function(app){
  //app.method('route', controller.method.bind(controller));

  app.post('/accounts/login/', authController.login.bind(authController));
  app.get('/accounts/logout/', authController.logout.bind(authController));

  app.get('/', navigation.index.bind(navigation));
  app.get('/login', navigation.login.bind(navigation));
  app.get('/game', navigation.game.bind(navigation));
};
