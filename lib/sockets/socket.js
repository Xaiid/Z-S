var playerIo = require('./player/playerIo');

//List of players
module.exports.players = {};
playerIo.players = this.players;

module.exports.init = function(io){

  io.sockets.on('connection', function(socket){
    console.log('Someone just connected');

    socket.on('Create player', playerIo.createPlayer(socket).bind(playerIo) );
    socket.on('Move', playerIo.move(socket).bind(playerIo));

    socket.on('disconnect', function(){
      // remove the username from global usernames list
      delete playerIo.players[socket.username];

      // echo globally that this client has left
      socket.broadcast.to(socket.room).emit('remove player', socket.username + ' has disconnected', socket.username);
      socket.leave(socket.room);
    });

  });

  
};
