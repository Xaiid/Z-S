var playerIo = require('./player/playerIo');

//List of players
module.exports.players = {};
playerIo.players = this.players;

module.exports.init = function(io){

  io.sockets.on('connection', function(socket){
    console.log('Someone just connected');

    socket.on('Create player', playerIo.createPlayer(socket).bind(playerIo) );
    socket.on('Player list', playerIo.getPlayers(socket).bind(playerIo));

  });
  
};
