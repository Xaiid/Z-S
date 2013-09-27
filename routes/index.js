//All the routes are specified in here
//var controller = require('mycontroller');

var authController = require('../controllers/authController');
var navigation     = require('../controllers/navigation_controller');

module.exports = function(app){
  //app.method('route', controller.method.bind(controller));
  app.get('/', navigation.index.bind(navigation));

  app.post('/accounts/login/', authController.authenticate());
  app.get('/accounts/logout/', authController.logout());
};
