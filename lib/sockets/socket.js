var playerIo = require('./player/playerIo');
var zombieIo = require('./player/zombieIo');
var chatIo = require('./player/chatIo');

//List of players
module.exports.players = {};
playerIo.players = this.players;

module.exports.init = function(io){

  io.sockets.on('connection', function(socket){
    console.log('Someone just connected');

    setTimeout(function(){
      socket.emit('Create world', {grid: playerIo.grid, players: playerIo.players, stage: playerIo.stage});
      socket.broadcast.to(socket.room).emit('Create world', {grid: playerIo.grid, players: playerIo.players, stage: playerIo.stage});
    }, 200);

    socket.on('Create player', playerIo.createPlayer(socket).bind(playerIo) );
    socket.on('Move player', playerIo.movePlayer(socket).bind(playerIo));
    socket.on('Shoot', playerIo.shoot(socket).bind(playerIo));

    socket.on('Move zombie', zombieIo.moveZombie(socket).bind(zombieIo));

    socket.on('Send message', chatIo.sendMessage(socket).bind(chatIo));

    socket.on('disconnect', function(){
      // remove the username from global usernames list
      delete playerIo.players[socket.username];

      // echo globally that this client has left
      socket.broadcast.to(socket.room).emit('remove player', socket.username + ' has disconnected', socket.username);
      socket.leave(socket.room);
    });

  });

  
};
