//All the routes are specified in here
//var controller = require('mycontroller');

var navigation = require('../controllers/navigation_controller');

module.exports = function(app){
  //app.method('route', controller.method.bind(controller));
  app.get('/', navigation.index.bind(navigation));
};
