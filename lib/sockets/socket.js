var playerIo = require('./player/playerIo');

module.exports.init = function(io){

  io.sockets.on('connection', function(socket){
    console.log('Someone just connected');

    socket.on('Create player', playerIo.createPlayer(socket) );

  });
  
};
